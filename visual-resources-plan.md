# План визуальных ресурсов

## Лучшая следующая цель

Следующий визуальный прирост даст не новая секция, а один сильный hero-ассет: рабочая карта AI-аудита как реальный предмет или сцена. Сейчас верх страницы уже показывает артефакт в HTML, но ему не хватает настоящей визуальной опоры: фотографии, предметного рендера или аккуратного generated still.

## Чего не хватает

- Hero-ресурс: предметная сцена с картой процессов, заметками и ноутбуком без фейкового dashboard-интерфейса.
- Section reference: 2-3 референса для диагностических секций с редакторской строковой версткой вместо сетки карточек.
- Иллюстрации: одна спокойная схема процесса AI-аудита, без персонажей и декоративных маскотов.
- Иконки: единый line-набор для "процесс", "качество", "промпт-пак", "демо-ассистент", "внедрение".
- Соцсети: OG-изображение 1200x630 с коротким оффером и той же холодной светлой системой.
- Мудборд: контактный лист с холодным daylight, белыми поверхностями, синим action-акцентом и документальными рабочими материалами.

## План файлов

- `public/visuals/hero-ai-audit-dossier.webp` - главный hero still, 1600x1000.
- `public/visuals/process-map-macro.webp` - макро-кадр рабочей карты для секции процесса, 1400x900.
- `public/visuals/workshop-table.webp` - спокойный кадр рабочего стола или воркшопа без постановочных людей, 1400x900.
- `public/visuals/ai-audit-og.png` - изображение для соцсетей, 1200x630.
- `public/visuals/moodboard-contact-sheet.webp` - мудборд из 6-8 кадров, 1600x1200.
- `public/icons/audit-system-icons.svg` - единый SVG-sprite или отдельные line-иконки в одном стиле.

## Исполнимые промпты

### Hero still

Prompt:
`Photorealistic premium product-studio still life for a Russian B2B AI audit consultant. A clean white desk with printed process map sheets, small cobalt blue tabs, a laptop with abstract blurred Russian interface blocks, pencil marks, sticky notes, and a structured workshop worksheet. Cool daylight, restrained shadows, high-end editorial composition, no purple glow, no mascots, no fake English text, no decorative AI robots, 16:10 aspect ratio.`

Negative:
`No neon, no purple gradient, no floating app logos, no fake dashboard, no hand-drawn people, no unreadable dense text, no beige craft palette.`

### Process macro

Prompt:
`Close-up macro image of an AI implementation process map on white paper: columns for diagnosis, scenarios, prompt pack, demo assistant, rollout. Minimal Russian labels only, precise pen annotations, cobalt blue markers, clean consultant workshop aesthetic, shallow depth of field, cool neutral palette, 3:2 aspect ratio.`

Negative:
`No futuristic holograms, no glowing circuits, no stock office handshake, no English labels, no messy sticky-note wall.`

### Workshop table

Prompt:
`Editorial overhead photo of a calm consulting workshop table: printed AI audit worksheets, laptop, notebook, cards with Russian labels, two cups of coffee partly cropped, cool daylight, white and light gray surfaces, one cobalt accent, premium B2B service aesthetic, 3:2 aspect ratio.`

Negative:
`No visible faces, no fake startup office, no colorful clutter, no dramatic neon, no AI robot imagery.`

### OG image

Prompt:
`Clean social preview image for a Russian AI audit landing page. White background, cobalt blue accent shape, one hero document object, headline in Russian: "AI-аудит и рабочие сценарии за 14 дней". Minimal premium B2B layout, large readable typography, no tiny text, 1200x630.`

Negative:
`No emoji, no purple gradient, no busy dashboard, no fake metrics, no stock people.`

### Moodboard contact sheet

Prompt:
`A 6-panel moodboard contact sheet for a practical AI audit service: cool daylight desk, process map macro, clean workshop materials, abstract AI workflow diagram, polished document cover, simple cobalt accent icon set. White and light gray palette, restrained shadows, serious B2B tone, no decorative glow, 4:3 aspect ratio.`

Negative:
`No beige lifestyle palette, no futuristic robot, no neon, no cute illustrations, no fake SaaS dashboard.`

## Референсы секций

- Hero: asymmetric split, left text and CTA, right object-like audit dossier.
- Problem: editorial diagnostic list with sparse dividers, not a 3-column feature grid.
- Process: vertical timeline with restrained reveal, no sticky hijack needed.
- Pricing: keep comparison functional, avoid fake urgency and decorative badges.
- CTA: one clear action, no duplicated contact intent.
