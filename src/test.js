const data1 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Orskin Aesthetic Clinic",
      "url": "https://orskin.ae/contact",
      "logo": "https://orskin.ae/assets/images/logo.webp",
      "image": [
        "https://orskin.ae/assets/images/contactBanner.webp"
      ],
      "description": "Get in touch with Orskin Aesthetic Clinic in Dubai for tailored skincare treatments and aesthetic services.Happy to assist you-book your appointment now.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "285D Al Wasl Rd",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971 (0) 4 345 5520",
          "contactType": "Customer Service",
          "areaServed": "AE",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+971 (0) 50 445 9672",
          "contactType": "Customer Service",
          "areaServed": "AE",
          "availableLanguage": "English"
        }
      ],
      "email": "info@orskin.ae",
      "sameAs": [
        "https://www.facebook.com/orskinaesthetics",
        "https://www.instagram.com/orskinaesthetics"
      ],
      "medicalSpecialty": "Aesthetic Medicine",
      "healthPlan": {
        "@type": "HealthInsurancePlan",
        "name": "Cosmetic Health Plan",
        "provider": {
          "@type": "Organization",
          "name": "Orskin Aesthetic Clinic"
        }
      },
      "openingHours": [
        "Mo-Sa 09:00-21:00",
        "Su 10:00-19:00"
      ],
      "license": {
        "@type": "MedicalLicense",
        "name": "MOHAP Licensed Clinic",
        "licenseNumber": "3ELWT8YK-091025",
        "validUntil": "2026-12-31",
        "issuingAuthority": "MOHAP"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://orskin.ae/search/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://orskin.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://orskin.ae/contact"
        }
      ]
    }
  ]
}
