const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch(),page=await browser.newPage({viewport:{width:360,height:800}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const mode=id=>page.locator(`#mode-nav [data-mode="${id}"]`);
 const active=async id=>{await page.waitForFunction(id=>document.querySelector(`#mode-nav [data-mode="${id}"]`)?.getAttribute('aria-current')==='page',id);assert.equal(await mode(id).getAttribute('aria-current'),'page');};
 await page.goto('http://localhost:3000');await page.waitForSelector('#course-title');
 await page.locator('#course-response').fill('Bana yardım eder misiniz?');await page.locator('[data-section=understand]').click();
 await mode('words').click();await page.waitForSelector('#word-search');await active('words');
 await page.locator('#view [href="#/words/saved"]').click();await page.waitForURL('**/#/words/saved');
 await page.locator('#open-outline').click();assert.equal(await page.locator('#outline-dialog .chapter-outline').count(),0);assert.equal(await page.locator('#outline-dialog [aria-current=page]').getAttribute('href'),'#/words/saved');await page.keyboard.press('Escape');assert.equal(await page.evaluate(()=>document.activeElement.id),'open-outline');
 await mode('practice').click();await page.waitForURL('**/#/practice');await active('practice');
 await page.locator('#open-outline').click();await page.locator('#outline-dialog summary').filter({hasText:'Pronunciation and listening'}).click();await page.locator('#outline-dialog [href="#/lesson/ch1-1/read"]').click();await page.waitForURL('**/#/lesson/ch1-1/read');await active('practice');
 await mode('lessons').click();await page.waitForURL('**/#/lesson/foundation-references/understand');await active('lessons');assert.equal(await page.locator('#course-response').inputValue(),'Bana yardım eder misiniz?');
 await mode('practice').click();await page.waitForURL('**/#/lesson/ch1-1/read');
 await mode('bible').click();await page.waitForSelector('#bible-results');await active('bible');
 await page.locator('.bible-passage-row').first().click();await page.waitForSelector('#bible-note');const passage=page.url().split('/study/')[1].split('/')[0];await page.locator('#bible-note').fill('Tanrı sözünü anlamak istiyorum.');await page.locator('[data-bible-section=understand]').click();
 await mode('words').click();await page.waitForURL('**/#/words/saved');await page.locator('#view > .return-to-bible').waitFor({state:'visible'});await page.locator('#view > .return-to-bible').click();await page.waitForURL('**/#/bible/study/'+passage+'/understand');await page.locator('#bible-note').waitFor({state:'visible'});assert.equal(await page.locator('#bible-note').inputValue(),'Tanrı sözünü anlamak istiyorum.');
 await mode('lessons').click();await page.waitForURL('**/#/lesson/foundation-references/understand');await page.goBack();await page.waitForURL('**/#/bible/study/'+passage+'/understand');await page.reload();await page.waitForSelector('#bible-note');await mode('practice').click();await page.waitForURL('**/#/lesson/ch1-1/read');await mode('words').click();await page.waitForURL('**/#/words/saved');
 await page.locator('.settings-link').click();await page.waitForSelector('#export-backup');assert.equal(await page.locator('#study-nav .chapter-outline').count(),0);await mode('bible').click();await page.waitForURL('**/#/bible/study/'+passage+'/understand');
 // Check all activity links remain on-screen and operable in both languages.
 for(const width of [360,390,768,1024,1440])for(const locale of ['en','ko']){
  await page.setViewportSize({width,height:900});await page.selectOption('#study-language',locale);await page.waitForFunction(l=>document.documentElement.lang===l,locale);
  for(const id of ['lessons','bible','words','practice']){const link=mode(id);assert(await link.isVisible());const box=await link.boundingBox();assert(box.x>=0&&box.x+box.width<=width,`${id}/${locale}/${width}: reachable without horizontal scroll`);await active('bible');}
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),locale+'/'+width);
 }
 await page.setViewportSize({width:390,height:844});await page.selectOption('#study-language','en');await page.locator('[data-bible-section=read]').click();await mode('lessons').focus();await page.keyboard.press('Enter');await page.waitForURL('**/#/lesson/foundation-references/understand');await page.locator('[data-section=read]').click();
 assert((await page.locator('.course-tr').first().boundingBox()).y<700,'teaching remains near top');
 await active('lessons');await page.locator('#course-title').waitFor({state:'visible'});await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>new Promise(requestAnimationFrame));
 fs.mkdirSync(path.join(__dirname,'../test-results'),{recursive:true});await page.screenshot({path:path.join(__dirname,'../test-results/navigation-phone-en.png')});
 await page.selectOption('#study-language','ko');await page.screenshot({path:path.join(__dirname,'../test-results/navigation-phone-ko.png')});
 await page.setViewportSize({width:1440,height:900});await page.selectOption('#study-language','en');await page.screenshot({path:path.join(__dirname,'../test-results/navigation-desktop.png')});
 const backup=await page.evaluate(()=>learningStore.export());assert.equal(JSON.parse(backup.values.spiritual_turkish_device_v3).activityResume.words,'words/saved');
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: visible activity switching, contextual outlines, independent resume, drafts, Back/reload, return links, keyboard, bilingual 360–1440px navigation.');
})().catch(e=>{console.error(e);process.exit(1);});
