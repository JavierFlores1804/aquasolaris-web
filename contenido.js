/*
  ==========================================================================
  CONTENIDO EDITABLE — AQUA SOLARIS
  ==========================================================================
  Este es el ÚNICO archivo que necesitas editar para actualizar datos de
  contacto, donaciones y redes sociales. No toques index.html para esto.
 
  Instrucciones:
  1. Cambia solo lo que está entre comillas "..." de cada línea.
  2. No borres las comillas ni las comas.
  3. Guarda el archivo y vuelve a subirlo a GitHub (o donde tengas el sitio).
  4. Los cambios se ven apenas recargas la página, sin instalar nada.
 
  Si dejas un campo vacío ("") esa sección se oculta o muestra "próximamente"
  automáticamente en el sitio.
  ==========================================================================
*/
 
window.AQUA_SOLARIS_DATOS = {
 
  // ---- Contacto ----
  contacto: {
    correo: "info@aquasolaris.org",
    telefono_visible: "+51 944 455 725",
    whatsapp_numero: "51944455725"
  },
 
  // ---- Donaciones ----
  donaciones: {
    yape_plin_numero: "+51 944 455 725",
    yape_titular: "Javier Eduardo Flores Velásquez (representante legal)",
 
    banco_nombre: "",        // ej: "BCP", "Interbank", "BBVA"
    banco_cuenta: "",        // número de cuenta
    banco_cci: "",           // código de cuenta interbancario (20 dígitos)
 
    // IMPORTANTE: PayPal NO genera enlaces de "Donar" desde cuentas personales
    // (jeduf88@hotmail.com es personal). Para activar este botón necesitas:
    //   Opción rápida (2 min): crea un usuario en https://www.paypal.com/paypalme
    //     y pon aquí algo como "https://paypal.me/tuusuario"
    //   Opción recomendada: sube tu cuenta a "Business" (gratis) en PayPal
    //     y crea un botón "Donate" real; pega aquí el link que te den.
    paypal_link: ""          // vacío = el sitio muestra "próximamente"
  },
 
  // ---- Redes sociales (deja vacío "" el que aún no tengas) ----
  redes_sociales: {
    tiktok: "https://www.tiktok.com/@aqua.solaris",
    instagram: "https://www.instagram.com/aquasolaris_org/",
    facebook: "https://www.facebook.com/share/1E4qcXGfxu/",
    youtube: "https://www.youtube.com/@AQUA.SOLARIS"
  }
};
 
