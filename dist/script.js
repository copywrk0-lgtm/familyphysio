/* EDIT THIS OBJECT: all clinic facts, contact links, photo paths and real reviews. */
const CLINIC_CONFIG = {
  name: { en: 'Family Physio Clinic', hi: 'फैमिली फिजियो क्लिनिक' },
  phone: '+919871019716',
  phoneDisplay: '+91 98710 19716',
  whatsapp: '919871019716', // International digits only, without + or spaces.
  address: {
    label: { en: 'B-13, Chand Bagh, Main Karawal Nagar Road, Bhajanpura, New Delhi — 110094', hi: 'बी-13, चाँद बाग, मुख्य करावल नगर रोड, भजनपुरा, नई दिल्ली — 110094' },
    streetAddress: 'B-13, Chand Bagh, Main Karawal Nagar Road',
    addressLocality: 'Delhi', addressRegion: 'Delhi', postalCode: '110094', addressCountry: 'IN'
  },
  hours: { confirmed: false, label: { en: '', hi: '' }, days: [], opens: '', closes: '' },
  consultationFee: { en: '', hi: '' }, // Fill only after the clinic confirms its fee.
  googleMapsLink: "https://www.google.com/maps?cid=16334052357820635348",
  googleMapsEmbed: 'https://maps.google.com/maps?q=28.7039334,77.2645598&z=16&output=embed',
  siteUrl: 'https://family-physio-movement.ardent-vale-0425.chatgpt.site',
  practitioner: {
    name: { en: 'Dr. Shehzad', hi: 'डॉ. शहज़ाद' },
    bio: {"en": "A physiotherapist at Family Physio Clinic in Bhajanpura, Delhi. Your assessment looks at your symptoms, joint movement and strength, followed by a treatment plan and practical exercises for everyday activities.", "hi": "दिल्ली के भजनपुरा स्थित फैमिली फिजियो क्लिनिक में फिजियोथेरेपिस्ट। जाँच में आपके लक्षणों, जोड़ों की गतिविधि और ताकत को समझकर उपचार की योजना और रोज़मर्रा की गतिविधियों के लिए व्यायाम बताए जाते हैं।"},
    qualifications: { en: 'BPTh/BPT', hi: 'बीपीटीएच/बीपीटी' }
  },
  photos: {
    practitioner: { src: 'assets/ceremony.webp', width: 1291, height: 959, alt: { en: 'Group photograph at a convocation ceremony', hi: 'दीक्षांत समारोह में समूह की तस्वीर' }, caption: { en: 'Convocation ceremony', hi: 'दीक्षांत समारोह' } },
    logo: { src: 'assets/clinic-logo.webp', width: 246, height: 225, alt: { en: 'Family Physio Clinic logo', hi: 'फैमिली फिजियो क्लिनिक का लोगो' } },
    clinic: { src: '', alt: { en: 'Family Physio Clinic interior', hi: 'फैमिली फिजियो क्लिनिक का अंदरूनी दृश्य' } }
  },
  // Genuine Google reviews transcribed from supplied screenshots.
  // excerpt: true means only complete visible sentences are reproduced.
  // text.hi is a faithful translation; reviewer names and ratings stay unchanged.
  reviews: [
  {
    "name": "Suraj Singh Kushwaha",
    "rating": 5,
    "text": {
      "en": "Best for Skin and Physical Health!\nI visited Family Physio Clinic for a chronic joint issue, but I was pleasantly surprised to see they also treat Skin problems.",
      "hi": "त्वचा और शारीरिक स्वास्थ्य के लिए बेहतरीन!\nमैं पुराने जोड़ की समस्या के लिए फैमिली फिजियो क्लिनिक गया था, लेकिन मुझे यह जानकर सुखद आश्चर्य हुआ कि वे त्वचा की समस्याओं का भी उपचार करते हैं।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "ujjwal Chaudharyyy",
    "rating": 5,
    "text": {
      "en": "I recently had a hijama session here and the experience was really good. The practitioner was knowledgeable and made me feel comfortable throughout. Hygiene was properly maintained and the process was smooth.",
      "hi": "मैंने हाल ही में यहाँ हिजामा का एक सत्र लिया और मेरा अनुभव बहुत अच्छा रहा। चिकित्सक जानकार थे और पूरे समय मुझे सहज महसूस कराया। साफ़-सफ़ाई का ठीक से ध्यान रखा गया और प्रक्रिया सुचारु रही।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "R gautam",
    "rating": 5,
    "text": {
      "en": "Best Holistic Care in Bhajanpura! I was looking for a place that offers both modern and traditional healing. Family Physio Clinic is unique because they offer Panchkarma therapy alongside professional physiotherapy.",
      "hi": "भजनपुरा में बेहतरीन समग्र देखभाल! मैं ऐसी जगह ढूँढ रहा था जहाँ आधुनिक और पारंपरिक दोनों तरह की चिकित्सा मिले। फैमिली फिजियो क्लिनिक अलग है क्योंकि वे पेशेवर फिजियोथेरेपी के साथ पंचकर्म थेरेपी भी प्रदान करते हैं।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "Suraj Rajput",
    "rating": 5,
    "text": {
      "en": "Highly Professional & Safe Environment! Being a female, I was looking for a clinic with female staff.",
      "hi": "बेहद पेशेवर और सुरक्षित वातावरण! एक महिला होने के नाते, मैं महिला स्टाफ वाला क्लिनिक ढूँढ रही थी।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "akhil kumar",
    "rating": 5,
    "text": {
      "en": "Family physio clinic is a good place to treat your problems related to neck pain, vein pain, back pain and survical pain.",
      "hi": "गर्दन के दर्द, नसों के दर्द, पीठ के दर्द और सर्वाइकल दर्द से जुड़ी समस्याओं के उपचार के लिए फैमिली फिजियो क्लिनिक एक अच्छी जगह है।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "Ravi kumar",
    "rating": 4,
    "text": {
      "en": "I was experiencing pelvic floor issues after childbirth. The therapists at Family Physio Clinic were incredibly supportive and understanding. They provided me with personalized exercises and guidance, which helped me regain my strength and confidence.",
      "hi": "बच्चे के जन्म के बाद मुझे पेल्विक फ्लोर से जुड़ी समस्याएँ हो रही थीं। फैमिली फिजियो क्लिनिक के थेरेपिस्ट बहुत सहयोगी थे और मेरी स्थिति को समझते थे। उन्होंने मेरी ज़रूरतों के अनुसार व्यायाम और मार्गदर्शन दिया, जिससे मुझे अपनी ताकत और आत्मविश्वास वापस पाने में मदद मिली।"
    },
    "excerpt": true,
    "url": ""
  },
  {
    "name": "afsana Parveen",
    "rating": 5,
    "text": {
      "en": "I went to Family Physio Clinic for a terrible Frozen Shoulder (जमा हुआ कंधा) that severely limited my arm movement.",
      "hi": "मैं बहुत तकलीफ़ देने वाले फ्रोज़न शोल्डर (जमा हुआ कंधा) के लिए फैमिली फिजियो क्लिनिक गई थी, जिसके कारण मेरी बाँह की गतिविधि बहुत सीमित हो गई थी।"
    },
    "excerpt": true,
    "url": ""
  }
]
};

/* All interface copy and clinical information live in this one translations object. */
async function initialiseClinic() {
const response = await fetch(new URL("translations.json", import.meta.url));
if (!response.ok) throw new Error("Translation copy could not load");
const translations = await response.json();

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let language = 'en';
try { if (localStorage.getItem('family-physio-language') === 'hi') language = 'hi'; } catch (_) {}
let quizStep = 0;
let quizAnswers = Array(5).fill(null);
let selectedPain = null;
let painTrigger = null;
const panel = $('#pain-panel');
const menuToggle = $('#menu-toggle');
const menu = $('#mobile-menu');
const localeValue = value => typeof value === 'object' && value !== null ? (value[language] || value.en || '') : String(value ?? '');
const t = key => translations[language][key];
const format = (string, values) => string.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
const safeURL = (value, fallback = '') => { try { const url = new URL(value, window.location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : fallback; } catch (_) { return fallback; } };
const digits = value => String(value).replace(/\D/g, '');
const phoneHref = () => 'tel:+' + digits(CLINIC_CONFIG.phone);
function bookingURL(message) { return 'https://wa.me/' + digits(CLINIC_CONFIG.whatsapp) + '?text=' + encodeURIComponent(message); }
function messageFor(kind) { return format(t('messages')[kind] || t('messages').general, { clinic: localeValue(CLINIC_CONFIG.name), practitioner: localeValue(CLINIC_CONFIG.practitioner.name) }); }
function setCopy(element, value) {
  element.replaceChildren();
  String(value).split('\n').forEach((line, index) => { if (index) element.append(document.createElement('br')); element.append(document.createTextNode(line)); });
}
function make(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
function setMenu(open) {
  menu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', t(open ? 'closeMenu' : 'openMenu'));
}
menuToggle.addEventListener('click', () => setMenu(menu.hidden));
$$('a', menu).forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { setMenu(false); menuToggle.focus(); } });
window.matchMedia('(min-width: 961px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

function renderPhotos() {
  $$('[data-photo]').forEach(slot => {
    const type = slot.dataset.photo;
    const photo = CLINIC_CONFIG.photos[type];
    const source = photo?.src ? safeURL(photo.src) : '';
    slot.replaceChildren(); slot.hidden = false;
    if (source) {
      const img = make('img'); img.src = source; img.alt = localeValue(photo.alt); img.loading = type === 'logo' ? 'eager' : 'lazy'; img.decoding = 'async';
      img.width = photo.width || (type === 'clinic' ? 1280 : 800);
      img.height = photo.height || (type === 'clinic' ? 849 : 1000);
      img.addEventListener('error', () => showPhotoPlaceholder(slot, type), { once: true });
      slot.append(img);
      if (photo.caption) slot.append(make('figcaption', '', localeValue(photo.caption)));
      else if (type === 'clinic') slot.append(make('figcaption', '', t('clinicPhotoCaption')));
    } else showPhotoPlaceholder(slot, type);
  });
}
function showPhotoPlaceholder(slot, type) {
  slot.replaceChildren();
  if (type === 'logo') { slot.hidden = true; return; }
  const holder = make('div', 'photo-placeholder');
  holder.append(make('span', 'eyebrow', t(type === 'clinic' ? 'clinicPhotoSlot' : 'practitionerPhotoSlot')), make('p', '', t('photoPending')));
  slot.append(holder);
}
function validReviews() {
  return CLINIC_CONFIG.reviews.filter(review => review.name?.trim() && Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5 && (typeof review.text === 'string' ? review.text.trim() : review.text?.en?.trim() || review.text?.hi?.trim()));
}
function renderReviews() {
  const track = $('#reviews-track'); const reviews = validReviews(); track.replaceChildren();
  $('#reviews-note').hidden = reviews.length > 0;
  if (!reviews.length) {
    CLINIC_CONFIG.reviews.forEach((_, index) => {
      const card = make('article', 'review-card review-pending');
      card.append(make('span', 'eyebrow', format(t('reviewPendingLabel'), { number: String(index + 1).padStart(2, '0') })), make('h3', '', t('reviewPendingTitle')), make('p', '', t('reviewPendingBody')));
      track.append(card);
    });
    return;
  }
  reviews.forEach(review => {
    const card = make('article', 'review-card');
    const stars = make('div', 'review-stars', '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating));
    stars.setAttribute('role', 'img'); stars.setAttribute('aria-label', format(t('ratingLabel'), { rating: review.rating }));
    const quote = make('blockquote', '', localeValue(review.text));
    if (language === 'hi' && typeof review.text !== 'string' && !review.text.hi && review.text.en) quote.lang = 'en';
    card.append(stars);
    if (review.excerpt || (language === 'hi' && review.text?.hi)) {
      const context = make('p', 'review-context');
      if (review.excerpt) context.append(make('span', '', t('reviewExcerpt')));
      if (language === 'hi' && review.text?.hi) context.append(make('span', '', t('reviewTranslation')));
      card.append(context);
    }
    card.append(quote, make('span', 'review-author', review.name));
    const suppliedURL = typeof review.url === 'string' ? review.url.trim() : '';
    const link = /^https?:\/\//i.test(suppliedURL) ? safeURL(suppliedURL) : '';
    if (link) { const source = make('a', 'review-source', t('googleReview') + ' ↗'); source.href = link; source.target = '_blank'; source.rel = 'noopener'; card.append(source); }
    track.append(card);
  });
}
function scrollReviews(direction) {
  const track = $('#reviews-track'); const card = $('.review-card', track);
  track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 330) + 20), behavior: motionQuery.matches ? 'instant' : 'smooth' });
}
// Native details also open for a pointer-hover preview; a click keeps it open.
const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
$$('.treatment-card').forEach(card => {
  let hoverPreview = false;
  card.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && hoverQuery.matches && !card.open) { hoverPreview = true; card.open = true; }
  });
  card.addEventListener('pointerleave', () => { if (hoverPreview) { card.open = false; hoverPreview = false; } });
  $('summary', card).addEventListener('click', event => {
    if (hoverPreview && event.detail > 0) { event.preventDefault(); hoverPreview = false; card.open = true; }
  });
});
$('#reviews-prev').addEventListener('click', () => scrollReviews(-1));
$('#reviews-next').addEventListener('click', () => scrollReviews(1));
$('#reviews-track').addEventListener('keydown', event => { if (['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); scrollReviews(event.key === 'ArrowRight' ? 1 : -1); } });

function hasConfirmedHours() {
  const hours = CLINIC_CONFIG.hours;
  const time = /^([01]\d|2[0-3]):[0-5]\d$/;
  return hours?.confirmed === true && hours.days?.length > 0 && time.test(hours.opens) && time.test(hours.closes) && Boolean(localeValue(hours.label).trim());
}
function renderVisitFacts() {
  $('#hours-row').hidden = !hasConfirmedHours();
  $('#hours-value').textContent = hasConfirmedHours() ? localeValue(CLINIC_CONFIG.hours.label) : '';
  $('#consultation-fee').textContent = localeValue(CLINIC_CONFIG.consultationFee) || t('askFee');
}
function applyLanguage() {
  document.documentElement.lang = language;
  // Devanagari is requested only when Hindi is used; English keeps its existing font budget.
  if (language === 'hi' && !$('#hindi-font')) {
    const font = make('link'); font.id = 'hindi-font'; font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&display=swap';
    document.head.append(font);
  }
  $$('[data-i18n]').forEach(node => setCopy(node, t(node.dataset.i18n)));
  ['aria', 'alt', 'title'].forEach(attribute => {
    $$('[data-i18n-' + attribute + ']').forEach(node => node.setAttribute(attribute === 'aria' ? 'aria-label' : attribute, t(node.dataset['i18n' + attribute[0].toUpperCase() + attribute.slice(1)])));
  });
  $$('[data-config]').forEach(node => {
    let value = node.dataset.config.split('.').reduce((value, key) => value?.[key], CLINIC_CONFIG);
    if (node.dataset.config === 'address') value = CLINIC_CONFIG.address.label;
    setCopy(node, localeValue(value));
  });
  $$('[data-call]').forEach(link => { link.href = phoneHref(); });
  $$('[data-phone-label]').forEach(link => { link.textContent = CLINIC_CONFIG.phoneDisplay; });
  $$('[data-book]').forEach(link => { link.href = bookingURL(messageFor(link.dataset.book)); });
  $$('[data-maps]').forEach(link => { link.href = safeURL(CLINIC_CONFIG.googleMapsLink); });
  $('#clinic-map').src = safeURL(CLINIC_CONFIG.googleMapsEmbed);
  const languageButton = $('#language-toggle'); languageButton.textContent = language === 'en' ? 'हिन्दी' : 'English'; languageButton.lang = language === 'en' ? 'hi' : 'en'; languageButton.setAttribute('aria-label', t('switchLanguage'));
  $('.brand').setAttribute('aria-label', localeValue(CLINIC_CONFIG.name));
  setMenu(!menu.hidden);
  renderPhotos(); renderReviews(); renderQuiz(); renderVisitFacts();
  if (selectedPain) renderPain();
  document.title = format(t('metaTitle'), { clinic: localeValue(CLINIC_CONFIG.name) });
  const description = format(t('metaDescription'), { clinic: localeValue(CLINIC_CONFIG.name) });
  $('meta[name="description"]').content = description;
  $('meta[property="og:title"]').content = document.title;
  $('meta[property="og:description"]').content = description;
  $('meta[property="og:url"]').content = safeURL(CLINIC_CONFIG.siteUrl);
  let localeMeta = $('meta[property="og:locale"]');
  if (!localeMeta) { localeMeta = make('meta'); localeMeta.setAttribute('property', 'og:locale'); document.head.append(localeMeta); }
  localeMeta.content = language === 'hi' ? 'hi_IN' : 'en_IN';
  updateMotion();
}
$('#language-toggle').addEventListener('click', () => {
  language = language === 'en' ? 'hi' : 'en';
  try { localStorage.setItem('family-physio-language', language); } catch (_) {}
  applyLanguage();
});

function renderPain() {
  const information = t('pain')[selectedPain];
  $('#pain-panel-title').textContent = information.name;
  $('#pain-panel-intro').textContent = information.intro;
  $('#pain-panel-causes').textContent = information.causes;
  $('#pain-panel-care').textContent = information.care;
  $('#pain-panel-index').textContent = String(Object.keys(t('pain')).indexOf(selectedPain) + 1).padStart(2, '0');
  $('#pain-panel-book').href = bookingURL(format(t('messages').pain, { concern: information.name, clinic: localeValue(CLINIC_CONFIG.name) }));
}
function openPain(key, trigger) {
  selectedPain = key; painTrigger = trigger; renderPain();
  const area = ['neck', 'shoulder', 'back', 'knee', 'ankle'].includes(key) ? key : 'other';
  if (quizAnswers[0] !== area) quizAnswers = Array(5).fill(null);
  quizAnswers[0] = area; quizStep = 0; renderQuiz();
  panel.showModal(); document.body.classList.add('modal-open'); $('#close-panel').focus();
}
$$('[data-pain]').forEach(point => {
  point.addEventListener('click', () => openPain(point.dataset.pain, point));
  point.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPain(point.dataset.pain, point); } });
});
$('#close-panel').addEventListener('click', () => panel.close());
$('#panel-check').addEventListener('click', () => {
  quizStep = 1; panel.close(); renderQuiz(true);
  $('#pain-check').scrollIntoView({ behavior: motionQuery.matches ? 'instant' : 'smooth', block: 'start' });
});
panel.addEventListener('click', event => { if (event.target === panel) { const box = panel.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) panel.close(); } });
panel.addEventListener('close', () => { document.body.classList.remove('modal-open'); painTrigger?.focus(); });

function suggestedResult(answers) {
  if (answers[4] === 'urgent') return 'Urgent';
  if (answers[4] !== 'none' || answers[3] === 'severe' || answers[2] === 'rest') return 'Clinical';
  if (['neck', 'back'].includes(answers[0]) && ['persistent', 'recurring'].includes(answers[1])) return 'Manual';
  return 'Physio';
}
function quizMessage() {
  const questions = t('questions');
  const answers = questions.map((question, index) => question.title + ' ' + (question.options.find(option => option[0] === quizAnswers[index])?.[1] || '')).join('\n');
  const result = t('result' + suggestedResult(quizAnswers));
  return format(t('messages').quiz, { clinic: localeValue(CLINIC_CONFIG.name), answers, result });
}
function renderQuiz(focus = false) {
  const screen = $('#quiz-screen'); screen.replaceChildren(); screen.classList.remove('is-entering');
  const questions = t('questions'); const complete = quizStep >= questions.length;
  $('#quiz-count').textContent = complete ? '05 / 05' : String(quizStep + 1).padStart(2, '0') + ' / 05';
  $('#quiz-count').setAttribute('aria-label', format(t('questionStep'), { current: Math.min(quizStep + 1, 5), total: 5 }));
  $('#quiz-progress-fill').style.transform = 'scaleX(' + (complete ? 1 : (quizStep + 1) / 5) + ')';
  $('#quiz-back').disabled = quizStep === 0;
  if (complete) {
    const result = suggestedResult(quizAnswers);
    screen.append(make('span', 'quiz-result-label', t('resultLabel')));
    const heading = make('h3', '', t('result' + result)); heading.id = 'quiz-question'; heading.tabIndex = -1;
    screen.append(heading, make('p', 'quiz-result-copy', t('result' + result + 'Body')));
    const actions = make('div', 'quiz-result-actions');
    if (result === 'Urgent') { const emergency = make('a', 'button button-primary', t('emergencyCall') + ' ↗'); emergency.href = 'tel:112'; actions.append(emergency); }
    else if (result === 'Clinical') {
      const call = make('a', 'button button-primary', t('callClinic')); call.href = phoneHref();
      const emergency = make('a', 'button button-outline', t('emergencyHelp')); emergency.href = 'tel:112'; actions.append(call, emergency);
    } else {
      const booking = make('a', 'button button-primary', t('sendSummary') + ' ↗'); booking.href = bookingURL(quizMessage()); booking.target = '_blank'; booking.rel = 'noopener';
      const call = make('a', 'button button-outline', t('callClinic')); call.href = phoneHref(); actions.append(booking, call);
    }
    screen.append(actions, make('p', 'quiz-question-note', t('quizLimits')));
    const restart = make('button', 'quiz-restart', t('restart')); restart.type = 'button'; restart.addEventListener('click', () => { quizAnswers = Array(5).fill(null); quizStep = 0; renderQuiz(true); }); screen.append(restart);
  } else {
    const question = questions[quizStep];
    const heading = make('h3', '', question.title); heading.id = 'quiz-question'; heading.tabIndex = -1;
    screen.append(heading, make('p', 'quiz-question-note', question.note));
    const options = make('div', 'quiz-options'); options.setAttribute('role', 'group'); options.setAttribute('aria-labelledby', 'quiz-question');
    question.options.forEach(([value, label]) => {
      const option = make('button', 'quiz-option', label); option.type = 'button'; option.dataset.value = value; option.setAttribute('aria-pressed', String(quizAnswers[quizStep] === value));
      option.addEventListener('click', () => {
        quizAnswers[quizStep] = value;
        $$('.quiz-option', screen).forEach(button => button.setAttribute('aria-pressed', String(button.dataset.value === value)));
        $('.quiz-next', screen).disabled = false;
      });
      options.append(option);
    });
    screen.append(options);
    const next = make('button', 'button button-primary quiz-next', (quizStep === 4 ? t('getResult') : t('next')) + ' →'); next.type = 'button'; next.disabled = !quizAnswers[quizStep];
    next.addEventListener('click', () => { if (!quizAnswers[quizStep]) return; quizStep += 1; renderQuiz(true); });
    screen.append(next);
  }
  if (!motionQuery.matches) { void screen.offsetWidth; screen.classList.add('is-entering'); }
  if (focus) $('#quiz-question').focus({ preventScroll: true });
}
$('#quiz-back').addEventListener('click', () => { if (quizStep > 0) { quizStep -= 1; renderQuiz(true); } });

function updateSchema() {
  const address = { '@type': 'PostalAddress', ...CLINIC_CONFIG.address }; delete address.label;
  const schema = {
    '@context': 'https://schema.org', '@type': ['LocalBusiness', 'MedicalClinic'],
    name: CLINIC_CONFIG.name.en, url: safeURL(CLINIC_CONFIG.siteUrl), telephone: phoneHref().replace('tel:', ''), address,
    hasMap: safeURL(CLINIC_CONFIG.googleMapsLink)
  };
  if (hasConfirmedHours()) schema.openingHoursSpecification = { '@type': 'OpeningHoursSpecification', dayOfWeek: CLINIC_CONFIG.hours.days.map(day => 'https://schema.org/' + day), opens: CLINIC_CONFIG.hours.opens, closes: CLINIC_CONFIG.hours.closes };
  $('#clinic-schema').textContent = JSON.stringify(schema);
}
let ticking = false; let revealObserver = null; let scrollInstalled = false;
const clamp = value => Math.min(1, Math.max(0, value));
function updateMotion() {
  const height = window.innerHeight; const timeline = $('.timeline'); const timelineBox = timeline.getBoundingClientRect();
  const progress = motionQuery.matches ? 1 : clamp((height * .85 - timelineBox.top) / Math.max(timelineBox.height, height * .45));
  timeline.style.setProperty('--timeline-progress', progress);
  if (!motionQuery.matches && window.innerWidth > 760) {
    const shift = Math.min(window.scrollY, 800) * .035;
    $('.shape-one').style.transform = 'translateY(' + shift + 'px)'; $('.shape-two').style.transform = 'translateY(' + -shift * .7 + 'px)';
  } else $$('.hero-shape').forEach(shape => { shape.style.transform = 'none'; });
  ticking = false;
}
function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(updateMotion); } }
function setupMotion() {
  revealObserver?.disconnect();
  if (!motionQuery.matches && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: .06 });
    $$('.reveal').forEach(node => { if (!node.classList.contains('is-visible')) revealObserver.observe(node); });
    document.body.classList.add('motion-ready');
  } else { document.body.classList.remove('motion-ready'); $$('.reveal').forEach(node => node.classList.add('is-visible')); }
  if (!motionQuery.matches && !scrollInstalled) { window.addEventListener('scroll', onScroll, { passive: true }); scrollInstalled = true; }
  if (motionQuery.matches && scrollInstalled) { window.removeEventListener('scroll', onScroll); scrollInstalled = false; }
  updateMotion();
}
motionQuery.addEventListener('change', setupMotion);
window.addEventListener('resize', onScroll, { passive: true });
updateSchema(); applyLanguage(); setupMotion();

}
initialiseClinic().catch(() => {
  // Static English contact links remain usable if a file or connection fails.
  document.body.classList.remove("motion-ready");
  document.querySelector(".body-art").style.opacity = "1";
  document.querySelectorAll(".spine-line").forEach(node => { node.style.strokeDashoffset = "0"; });
});
