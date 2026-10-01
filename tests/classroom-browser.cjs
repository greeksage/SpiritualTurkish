const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch(),page=await browser.newPage({viewport:{width:360,height:800}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://localhost:3000');await page.evaluate(()=>localStorage.clear());await page.reload();
 await page.waitForURL('**/#/lesson/foundation-references/read');
 assert.match(await page.locator('.course-kicker').innerText(),/Lesson 1 of 12/);
 for(const locale of ['en','ko']){await page.selectOption('#study-language',locale);await page.locator('[data-section=read]').click();const first=await page.locator('.course-tr').first().boundingBox();assert(first.y+first.height<740,`${locale}: first example in initial viewport`);for(const section of ['read','understand','practise','use'])assert(await page.locator('#study-'+section).isVisible());}
 await page.selectOption('#study-language','en');
 await page.locator('#course-response').fill('Kendi taslağım.');await page.evaluate(()=>window.originalResponse=document.getElementById('course-response'));
 await page.locator('[data-section=practise]').click();await page.locator('[data-section=use]').click();assert(await page.evaluate(()=>originalResponse===document.getElementById('course-response')));assert.equal(await page.locator('#course-response').inputValue(),'Kendi taslağım.');
 await page.goBack();await page.waitForURL('**/practise');await page.reload();assert.equal(await page.locator('#course-response').inputValue(),'Kendi taslağım.');
 const visit=async hash=>{await page.evaluate(hash=>location.hash=hash,hash);await page.waitForURL('**/'+hash);await page.waitForTimeout(50);};
 await visit('#/lesson/prayer-model-10/understand');
 await page.locator('#open-outline').click();assert.equal(await page.locator('#outline-dialog [aria-current=page]').count(),1);await page.locator('#outline-dialog [aria-current=page]').click();assert.equal(await page.locator('#outline-dialog').isVisible(),false);await page.waitForFunction(()=>document.activeElement.id==='course-title');
 await visit('#/lesson/ch1-1/read');const r=await page.evaluate(()=>deviceLearning.state.studyLast);assert.equal(r.id,'prayer-model-10');assert.equal(r.section,'understand');
 await page.locator('#ox-quiz-container button[onclick*="(1, \'O\')"]').click();assert.match(await page.locator('#ox-quiz-container').innerText(),/Correct!/);
 await page.selectOption('#study-language','ko');assert.equal(await page.locator('#ox-score-badge').innerText(),'0 / 5 정답');
 await page.locator('#ox-quiz-container button[onclick*="(1, \'X\')"]').click();await page.selectOption('#study-language','en');assert.match(await page.locator('#ox-score-badge').innerText(),/^1 \/ 5/);
 assert(!/[가-힣]/.test(await page.locator('#ox-quiz-container').innerText()));
 for(const alias of ['#/home','#/learn','#/']){await page.evaluate(alias=>location.hash=alias,alias);await page.waitForURL('**/#/lesson/prayer-model-10/understand');}
 await visit('#/courses');assert.equal(await page.locator('.course-selection article').count(),6);await page.locator('[href="#/course/foundation"]').click();await page.waitForURL('**/#/lesson/foundation-references/practise');
 await page.locator('.lesson-step-footer .primary-action').click();await page.waitForURL('**/#/lesson/foundation-books/read');assert.equal(await page.evaluate(()=>!!course.entry('foundation-references').completed),false);
 await page.waitForFunction(()=>deviceLearning.state.studyLast?.id==='foundation-books'&&deviceLearning.state.studyLast.section==='read');await visit('#/words');await page.locator('#view > .return-to-lesson').click();await page.waitForURL('**/#/lesson/foundation-books/read');
 await page.waitForSelector('#lesson-view:visible');await page.waitForTimeout(350);await page.evaluate(()=>document.getElementById('study-understand').scrollIntoView({block:'start',behavior:'instant'}));await page.waitForURL('**/#/lesson/foundation-books/understand');await page.reload();await page.waitForURL('**/#/lesson/foundation-books/understand');assert.equal(await page.evaluate(()=>deviceLearning.state.studyLast.section),'understand');
 const workshopIds=await page.evaluate(()=>Array.from(document.querySelectorAll('#legacy-host [data-lesson-id^="ch"]'),el=>el.dataset.lessonId));
 const allLeaks={};for(const id of workshopIds){await visit('#/lesson/'+id+'/read');const leaks=await page.evaluate(()=>{const result=[],walker=document.createTreeWalker(document.getElementById('learning-app'),NodeFilter.SHOW_TEXT);while(walker.nextNode()){const n=walker.currentNode,p=n.parentElement;if(p.closest('option,textarea,[data-user-content]')||!p.getClientRects().length)continue;if(/[가-힣]/.test(n.nodeValue))result.push(n.nodeValue.trim());}for(const el of document.querySelectorAll('#learning-app [aria-label],#learning-app [title],#learning-app [placeholder]'))if(el.getClientRects().length)for(const attr of ['aria-label','title','placeholder'])if(/[가-힣]/.test(el.getAttribute(attr)||''))result.push(el.getAttribute(attr));return result;});if(leaks.length)allLeaks[id]=leaks;}assert.deepEqual(allLeaks,{},'untranslated teaching');
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: classroom entry, chapters, anchor DOM, drafts, Back, reload, locale quiz isolation, aliases, per-course resume, resource return, free navigation.');
})().catch(e=>{console.error(e);process.exit(1);});
