/**
 * Datos de cada servicio para el modal de detalles.
 * Cada clave corresponde al parámetro usado en openServiceModal().
 */
const serviceData = {
  bodas: {
    icon: "favorite",
    title: "Bodas",
    description:
      "Tu boda es uno de los días más especiales de tu vida y en Restaurante y Banquetes Acapulco nos encargamos de que todo salga perfecto. Con más de 40 años de experiencia organizando bodas en Bogotá, te ofrecemos paquetes completos que incluyen todo lo que necesitas para que tú y tus invitados la pasen increíble.",
    includes: [
      "Salón decorado según tu estilo y presupuesto",
      "Banquete completo con menú variado",
      "Meseros y personal de atención",
      "Montaje de mesas, sillas y mantelería",
      "Coordinación del evento de principio a fin",
      "Opciones de música en vivo o DJ",
    ],
    whatsapp:
      "Hola, quiero cotizar mi boda 💒 ¿Me pueden dar información de paquetes y precios?",
    cta: "¡Cotiza tu Boda al Instante!",
  },
  quince: {
    icon: "cake",
    title: "15 Años",
    description:
      "Los quince años son una celebración única e irrepetible. Nosotros nos encargamos de crear una fiesta espectacular para la quinceañera, con todo organizado para que la familia solo se preocupe por disfrutar. Paquetes adaptados a diferentes presupuestos.",
    includes: [
      "Salón decorado con temática a elección",
      "Banquete para todos los invitados",
      "Coordinación del vals y protocolos",
      "Montaje completo de mesas y decoración",
      "Opciones de DJ, músicos o ambos",
      "Torta y mesa de dulces (opcional)",
    ],
    whatsapp:
      "Hola, quiero cotizar una fiesta de 15 años 🎂 ¿Qué paquetes manejan?",
    cta: "¡Cotiza los 15 Años al Instante!",
  },
  empresarial: {
    icon: "business_center",
    title: "Eventos Empresariales",
    description:
      "Organizamos eventos corporativos de todo tipo: fiestas de fin de año, integraciones, lanzamientos y reuniones de trabajo. Contamos con salones amplios y adaptables, servicio profesional y menús variados para que tu empresa quede muy bien con sus empleados e invitados.",
    includes: [
      "Salones con capacidad flexible",
      "Menús tipo buffet o servido a la mesa",
      "Equipos de sonido y proyección",
      "Atención profesional de meseros",
      "Decoración corporativa",
      "Facturación para empresas",
    ],
    whatsapp:
      "Hola, quiero cotizar un evento empresarial 🏢 ¿Qué opciones tienen disponibles?",
    cta: "¡Cotiza tu Evento Empresarial!",
  },
  familiar: {
    icon: "diversity_3",
    title: "Eventos Familiares",
    description:
      "Aniversarios, primeras comuniones, reuniones familiares y todo tipo de celebraciones en un ambiente acogedor. En Acapulco te ofrecemos el espacio, la atención y la organización para que tu familia disfrute al máximo sin que te preocupes por nada.",
    includes: [
      "Salón privado para tu celebración",
      "Menú adaptado al tipo de evento",
      "Decoración acorde a la ocasión",
      "Atención personalizada",
      "Música ambiente o en vivo",
      "Precios especiales para grupos familiares",
    ],
    whatsapp:
      "Hola, quiero cotizar un evento familiar 👨‍👩‍👧‍👦 ¿Qué opciones me ofrecen?",
    cta: "¡Cotiza tu Evento Familiar!",
  },
  cumpleanos: {
    icon: "celebration",
    title: "Cumpleaños",
    description:
      "Celebra tu cumpleaños o el de alguien especial con nosotros. Tenemos paquetes para todas las edades y presupuestos, con todo lo necesario para una fiesta divertida e inolvidable. Tú pones los invitados, nosotros nos encargamos del resto.",
    includes: [
      "Salón decorado para la ocasión",
      "Banquete con opciones variadas",
      "Torta de cumpleaños (opcional)",
      "Montaje de mesas y decoración",
      "Música y ambiente",
      "Atención completa de meseros",
    ],
    whatsapp:
      "Hola, quiero cotizar una fiesta de cumpleaños 🎉 ¿Qué paquetes tienen?",
    cta: "¡Cotiza tu Cumpleaños al Instante!",
  },
  revelacion: {
    icon: "child_friendly",
    title: "Revelación de Género",
    description:
      "¿Niño o niña? Haz de ese momento algo especial rodeado de tu familia y amigos. Organizamos tu revelación de género con decoración temática, ambiente divertido y todo listo para la gran sorpresa. Un recuerdo que no se olvida.",
    includes: [
      "Decoración temática rosa y azul",
      "Salón privado para la celebración",
      "Banquete o picada para los invitados",
      "Coordinación del momento de la revelación",
      "Ambiente musical",
      "Opciones de globos, humo de colores y más",
    ],
    whatsapp:
      "Hola, quiero cotizar una revelación de género 👶 ¿Qué paquetes manejan?",
    cta: "¡Cotiza tu Revelación de Género!",
  },
  bautizo: {
    icon: "water_drop",
    title: "Bautizos",
    description:
      "El bautizo de tu bebé merece una celebración especial en familia. Te ofrecemos un espacio acogedor con todo organizado para que después de la ceremonia disfrutes con tus seres queridos un momento tranquilo y bonito.",
    includes: [
      "Salón con ambiente familiar",
      "Banquete o brunch según tu preferencia",
      "Decoración temática para bautizo",
      "Montaje completo",
      "Atención de meseros",
      "Precios accesibles para todo presupuesto",
    ],
    whatsapp:
      "Hola, quiero cotizar un bautizo ✝️ ¿Qué opciones tienen disponibles?",
    cta: "¡Cotiza el Bautizo al Instante!",
  },
  grado: {
    icon: "school",
    title: "Grados",
    description:
      "Graduarse es un logro que merece ser celebrado en grande. Organizamos tu fiesta de grado con salón, atención y todo lo necesario para que tú y tu familia celebren con tranquilidad ese momento tan importante.",
    includes: [
      "Salón para celebración post-grado",
      "Banquete variado",
      "Decoración alusiva al logro",
      "Brindis de celebración",
      "Música y ambiente",
      "Paquetes ajustados a tu presupuesto",
    ],
    whatsapp:
      "Hola, quiero cotizar una fiesta de grado 🎓 ¿Qué paquetes me ofrecen?",
    cta: "¡Cotiza tu Fiesta de Grado!",
  },
  cincuenta: {
    icon: "emoji_events",
    title: "50 Años",
    description:
      "Los 50 años o las bodas de oro son un hito que se celebra a lo grande. Te ayudamos a organizar un evento memorable con decoración especial, un ambiente cálido y un servicio que hará sentir a todos como en casa.",
    includes: [
      "Salón decorado con temática dorada",
      "Banquete especial para la ocasión",
      "Brindis y torta de celebración",
      "Montaje elegante de mesas",
      "Música en vivo o DJ",
      "Coordinación completa del evento",
    ],
    whatsapp:
      "Hola, quiero cotizar una celebración de 50 años 🥂 ¿Qué opciones tienen?",
    cta: "¡Cotiza tu Celebración de 50 Años!",
  },
};
