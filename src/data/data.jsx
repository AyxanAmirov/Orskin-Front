import benner1 from "../User/assets/image/home-banner1.jpg"
import banner2 from "../User/assets/image/home-banner2.jpg"
import benner3 from "../User/assets/image/home-banner3.jpg"
import servicebanner1 from "../User/assets/image/service-banner-laser.jpg"
import servicebanner2 from "../User/assets/image/service-banner-slimming.jpg"
import servicebanner3 from "../User/assets/image/service-banner-aesthetics.jpg"
import servicebanner4 from "../User/assets/image/service-banner-facials.jpg"
import servicebanner5 from "../User/assets/image/service-banner-wellness.jpg"
import service1 from "../User/assets/image/service1.jpg"
import service2 from "../User/assets/image/service2.jpg"
import service3 from "../User/assets/image/service3.jpg"
import service3v500x500 from "../User/assets/image/service3 500x400.jpg"
import service3UltraClear from "../User/assets/image/UltraClear.jpeg"
import service4 from "../User/assets/image/service4.jpg"
import service5 from "../User/assets/image/service5.jpg"
import service6 from "../User/assets/image/service6.jpg"
import lazer from "../User/assets/image/laser.png"
import slimming from "../User/assets/image/slimming.png"
import aesthetics from "../User/assets/image/aesthetics.png"
import latest from "../User/assets/image/latest.jpg"
import dmg from "../User/assets/image/dmg-logo.png"
import darma from "../User/assets/image/darma-logo.png"
import nano from "../User/assets/image/nano-logo.png"
import nuro from "../User/assets/image/nuro-logo.png"
import facialBanner from "../User/assets/image/facial-banner.jpg";
import facialTitle from "../User/assets/image/facial-title.png";
import AboutBanner from "../User/assets/image/aboutus-banner.jpg";
import OrsolyaMatheisz from "../User/assets/image/team-co.jpg";
import DoctorGustavo from "../User/assets/image/team-dr1.jpg";
import DoctorAsima from "../User/assets/image/team-dr2.jpg";
import DoctorShagoon from "../User/assets/image/team-dr3.jpeg";
import Endospheres from "../User/assets/image/Endospheres-400x320.jpg";
import EmSlim from "../User/assets/image/EmSlim-400x320.jpg";
import LymphaticDrainageMassage from "../User/assets/image/Lymphatic-Drainage-Massage-400x320.jpg";
import PreNatalMassage from "../User/assets/image/Pre-Post-Natal-Massage-400x320.jpg";
import MaderoTherapy from "../User/assets/image/Madero-Therapy-400x320.jpg";
import Botox from "../User/assets/image/Botox-400x320.jpg";
import Fillers from "../User/assets/image/Fillers-400x320.jpg";
import Renuva from "../User/assets/image/Renuva-400x320.jpg";
import Sculptra from "../User/assets/image/Sculptra-400x320.jpg";
import Exosomes from "../User/assets/image/Exosomes-400x320.jpg";
import Regenera from "../User/assets/image/Regenera-400x320.jpg";
import LaserBanner from "../User/assets/image/Laser_Banner.jpg";
import SlimmingBanner from "../User/assets/image/Slimming_Banner.jpg";
import aestheticsbanner from "../User/assets/image/aesthetics-banner.jpg";
import facialsbanner from "../User/assets/image/facials-banner.jpg";
import wellnessbanner from "../User/assets/image/wellness-banner.jpg";
import Holistic from "../User/assets/image/Holistic-Facial-400x320.jpg";
import deepcleansing from "../User/assets/image/Deep-Cleansing-400x320.jpg";
import SculptFacial from "../User/assets/image/Neurotris-Sculpt-400x320.jpg";
import Morpheus from "../User/assets/image/Morpheus-400x320.jpg";
import Wellness400x320 from "../User/assets/image/Wellness-IVDrips-400x320.jpg";
import LessPainMoreGain from "../User/assets/image/LessPainMoreGain-400x600.jpg";
import blog1cover from "../User/assets/image/blog1-1140px408.jpg";
import blog2cover from "../User/assets/image/blog2-cover-1200x429.jpg";
import blog2product1 from "../User/assets/image/blog2-product1-400x400.jpg";

import blog3cover from "../User/assets/image/blog3cover1140x408.jpg";
import blog3coverMin from "../User/assets/image/blog3sm350x300Orskin.jpg";

export const services = [
    {
        id: 1,
        image: service3,
        imageALT: "Laser skin treatments",
        titleImage: lazer,
        title: "LASER",
        moreinfo: {
            banner: LaserBanner,
            image: null,
            description: null,
            items: [
                {
                    id: 1,
                    image: service3UltraClear,
                    title: "UltraClear",
                    description: "Orskin Aesthetics Clinic offers worlds first MID-IR fiber laser facial rejuvenation system in the world safe for all skin types ,UltraClear, can treat several skin layers, from the epidermis to the middermis. This innovative treatment offers precise, non-invasive skin rejuvenation , providing clients with age-defying results without the need for surgery or prolonged recovery. With this new cutting-edge technology and orskin expertises , a wide range of dermatological and cosmetic conditions can be treated, ensuring outstanding patient experience, safety, and efficacy. Ultraclear encourages the skin's natural healing process by vaporizing damaged exterior skin and applying controlled thermal energy to the underlying layers, which in turn promotes the creation of collagen and elastin. Fine lines, deep wrinkles, and scars are visibly reduced, and the skin becomes smoother, healthier, and more luminous as a result.",
                },
                {
                    id: 2,
                    image: service3v500x500,
                    title: "ADVATx",
                    description: "Our aestheticians use the advanced ADVATx, which is among the most sophisticated dermatology lasers in the world and can be used for multiple stand-alone and combination therapies. Advalight combines high-powered yellow and infrared laser energy to improve skin tone, texture and overall dermal health, making it particularly beneficial for conditions including psoriasis, rosacea, sun damage, wrinkles, spider veins, blemishes, and birth marks.",
                }

            ]
        }
    },
    {
        id: 2,
        image: service2,
        imageALT: "Slimming, fat burning procedures",
        titleImage: slimming,
        title: "SLIMMING",
        moreinfo: {
            banner: SlimmingBanner,
            image: null,
            description: "Even with the best intentions it can be difficult to shift fat deposits in certain areas, especially as we age. At Orskin, we offer a combination of different non-surgical slimming treatments, so you can get the desired shape you’re looking for, fast.",
            items: [
                {
                    id: 1,
                    image: Endospheres,
                    title: "Endospheres",
                    description: "The Endospheres technique uses a therapeutic massage device which generates low-frequency mechanical vibrations to target areas of the body where fatty deposits can build up and can be tricky to remove. It helps soften skin and fat tissue, reducing the appearance of cellulite, boosting lymphatic drainage, smoothing the silhouette, and promoting inch loss."
                },
                {
                    id: 2,
                    image: EmSlim,
                    title: "EmSlim",
                    description: "EmSlim is a non-invasive body contouring treatment that gets excellent results, especially for the abdomen and buttocks. The focused fat burning and muscle building system provides high-intensity energy in a short space of time meaning you can burn fat and get into shape easily."
                },
                {
                    id: 3,
                    image: null,
                    title: "Infrawrap",
                    description: "This infrared body wrap detoxes the body as you sweat away nasty toxins and release excess fluid. It is reported to make you release 3-5x times more sweat than a typical exercise session and burn up to 1400 calories per hour. As well as slimming and cellulite reduction, other benefits include faster recovery for sore muscles and injury and better sleep."
                },
                {
                    id: 4,
                    image: LymphaticDrainageMassage,
                    title: "Lymphatic Drainage massage",
                    description: "A relaxing and effective way to remove toxins and reduce fluid build-up, this gentle massage drains fluid from your lymph nodes allowing it to flow freely through the lymphatic system."
                },
                {
                    id: 5,
                    image: null,
                    title: "Neurotris pads",
                    description: "The state-of-the-art Neurotris Body Sculpting machine targets cellulite and loose skin for immediate and noticeable results. It can be used for inch loss, cellulite smoothing, muscle endurance, lymphatic drainage, muscle toning, deep muscle building, improvement in posture, c-section scars, and skin tightening after weight loss. Approximately five treatments are required to achieve the desired results."
                },
                {
                    id: 6,
                    image: null,
                    title: "Neurotsis SX-101 Body Contouring Microcurrent System",
                    description: "Named a “miracle machine” by Vogue magazine, this relaxing treatment will help you drop a dress size instantly. Two treatments per week are recommended over a set period to sculpt areas such as the legs, buttocks, stomach, back, and arms."
                },
                {
                    id: 7,
                    image: null,
                    title: "Legology",
                    description: "Target bump-prone areas with a powerful combination of deep detox aromatherapy oils, which work with the massage to encourage fluid removal and reduce cellulite. It’s all about trapping and removing excess fluid for smoother, clearer skin."
                },
                {
                    id: 8,
                    image: PreNatalMassage,
                    title: "Pre and postnatal massage",
                    description: "Treat yourself to a nurturing massage and unwind during pregnancy or post birth when your body needs it the most. Our trained therapists will ensure you feel safe, comfortable and relaxed throughout the treatment leaving you with less stress and a renewed sense of well-being."
                },
                {
                    id: 9,
                    image: MaderoTherapy,
                    title: "Madero Therapy",
                    description: "This invigorating deep tissue massage is performed using wooden tools to apply varying levels of pressure. As the instruments glide over the skin, you will feel completely at ease and the intensive technique allows our therapists to go deeper to relieve muscle tension and reduce cellulite."
                }

            ]
        }
    },
    {
        id: 3,
        image: service1,
        imageALT: "aesthetics procedures, botox, filler, skin boosters",
        titleImage: aesthetics,
        title: "aesthetics",
        moreinfo: {
            banner: aestheticsbanner,
            image: null,
            description: "At Orksin, we believe that everyone should feel comfortable in their own skin. We tailor our cutting-edge aesthetics treatments to patients’ individual needs for an authentic, holistic approach to non-surgical skincare. Our Aesthetics Department is led by Medical Director, Dr. Asima Nasir, an enthusiastic, committed American board-certified physician who combines art and science to enhance natural beauty. She provides the best treatment possible to produce outstanding outcomes.",
            items: [
                {
                    id: 1,
                    image: Botox,
                    title: "Botox",
                    description: "Botox (botulinum toxin) is injected into the skin to weaken or paralyze the muscle. It is commonly used to reduce facial wrinkles in the forehead and around the eyes by blocking certain chemical signals from nerves that cause muscles to contract. As a result, the facial muscles that cause wrinkles are temporarily relaxed. <br> <br> Botox is known to have multiple functions, such as combatting excessive sweating under the arms and treating migraines. At Orskin, we use high-quality botulinum toxin brands. The treatment time can vary from 20-50 minutes. It is always advisable to repeat the session every 3 to 6 months, depending on each case. As muscle action slowly returns, lines and wrinkles begin to reappear, requiring subsequent treatment."
                },
                {
                    id: 2,
                    image: Fillers,
                    title: "Filler",
                    description: "Filler is injected into the skin at different depths to help fill in facial wrinkles. Dermal fillers can help plump lips, smooth lines, and restore a more youthful appearance by replacing lost volume. Your skin already contains hyaluronic acid, which is a chemical that occurs naturally. It keeps skin moisturized and plump. HA fillers are usually gel-like and soft. There are several kinds of dermal fillers. Your healthcare provider will discuss your options with you."
                },
                {
                    id: 3,
                    image: Renuva,
                    title: "Renuva",
                    description: "Renuva is a non-surgical fat grafting solution designed to restore your natural contours. <br/> As we age, our faces naturally lose subcutaneous fat. The treatment uses a matrix of adipose-derived stem cells to regenerate fat cells, adding almost instantaneous fat volume in depleted areas of the skin for a smoother, more youthful look. Renuva is the first and only over-the-counter product that uses the body’s own fat to replenish age-related volume loss. <br/> Renuva is a non-surgical fat grafting solution designed to restore your natural contours. <br/> As we age, our faces naturally lose subcutaneous fat. The treatment uses a matrix of adipose-derived stem cells to regenerate fat cells, adding almost instantaneous fat volume in depleted areas of the skin for a smoother, more youthful look. Renuva is the first and only over-the-counter product that uses the body’s own fat to replenish age-related volume loss. <br/> <br/> Renuva is exclusively administered by skilled aesthetic injectors and can be injected anywhere that fat naturally occurs."
                },
                {
                    id: 4,
                    image: Sculptra,
                    title: "Sculptra",
                    description: "Poly-L-lactic acid is used by Sculptra to aid in collagen rebuilding for a more youthful appearance. In the deep dermis, collagen is a fibrous protein that gives skin structure and supports the actions of elastin and hyaluronic acid (HA), which keep the skin hydrated and smooth while also helping to preserve the skin’s form. A complexion that appears more youthful is attributed to a healthy supply of collagen. This cosmetic procedure uses FDA-approved poly-L-lactic acid to reduce deep wrinkles in your skin. The filler is injected wherever you want a fuller or smoother appearance."
                },
                {
                    id: 5,
                    image: null,
                    title: "Skin Boosters",
                    description: "Skin boosters (also known as injectable moisturizers or microinjections) involve injecting hyaluronic acid-based substances directly into the skin to improve texture, elasticity, hydration and overall appearance. <br/> <br/> Skin boosters are commonly used to rejuvenate the face, neck, and hands, but they can be applied to other areas of the body.The treatment is usually performed in a series of sessions, spaced a few weeks apart, to achieve optimal results.Unlike traditional dermal fillers, skin boosters provide a natural- looking improvement in skin quality without significantly altering facial contours."
                },
                {
                    id: 6,
                    image: null,
                    title: "Beauty Secret",
                    description: "Beauty Secret (or PolyDeoxyRiboNucleotide-PDRN) skin redensifying treatments refresh the facial features. Extracted from salmon DNA, it also contains the light chain of botulinum toxin, tranexamic acid, high purity hylaluronic acid, nanopeptide-4, arginine, and much more. PDRN is a popular choice in aesthetic medicine thanks to its rejuvenation properties. Beauty Secret involves injecting this substance into the skin to promote tissue repair, collagen production, and overall health. It is often used to target fine lines, wrinkles, and scars."
                },
                {
                    id: 7,
                    image: Exosomes,
                    title: "Exosomes",
                    description: "<b>How does exosomes work?</b> <br/> Exosomes’ mode of action is very unique as it follows specific selective cellular signals that act as messengers detecting inflammatory signals and delivering regenerative, anti- inflammatory factors to target cells."
                },
                {
                    id: 8,
                    image: null,
                    title: "Jalupro",
                    description: "Jalupro is an injectable bio-revitalization treatment, often referred to as a skin booster. The advanced formulation contains amino acids to hydrate the skin and give it a more youthful, radiant look. Jalupro HMW (High Molecular Weight) is based on sodium hyaluronate and a combination of amino acids. This blend works to give the skin a glowing texture, tackling the signs of aging and pollutant damage and replenishing natural vitamins.The latest innovation, Jalupro Super Hydro provides deep hydration and long-term freshness for tired and dehydrated skin. It penetrates deep into the skin where it enhances the peptide structure providing strong lifting effects, firmness, and deep hydration."
                },
                {
                    id: 9,
                    image: null,
                    title: "Profhilo",
                    description: "Profhilo is an injectable that contains stabilized hyaluronic acid. This revolutionary treatment plumps and remodels the skin, filling in fine lines and wrinkles and resulting in a fresh and clear appearance."
                },
                {
                    id: 10,
                    image: null,
                    title: "Platelet-rich fibrin (PRF) treatment",
                    description: "PRF is a second generation platelet concentrate which is an improvement over traditionally prepared PRP. PRF consists of a fibrin matrix polymerized in a tetra molecular structure, incorporating platelets, leucocytes, cytokines, and circulating stem cells.PRF promises and delivers an improved skin complexion with fewer fine lines and wrinkles. PRF can treat the effects of under-eye skin aging by filling in hollows and reducing the visibility of our wrinkles. Using the healing powers of platelets, PRF can add moisture to your skin and boost blood flow to fight the appearance of a tired complexion and refine skin tone. Once the treatment is completed, you will be able to admire improved skin quality and texture, more volume, and fewer dark circles for many months to come. The results vary from individual to individual and you may return for your next procedure sooner or later than expected."
                },
                {
                    id: 11,
                    image: null,
                    title: "Platelet-Rich Plasma (PRP) therapy",
                    description: "PRP therapy is a rejuvenation treatment that uses the innate healing and regenerative powers of the patient’s blood. These blood platelets, rich in growth factors, are injected into targeted areas of the skin or scalp to stimulate and accelerate cell regeneration. This bio-filler can be used to add volume to the face, neck, and hands. It also helps in restoring hair growth."
                },
                {
                    id: 12,
                    image: null,
                    title: "NCTF 135 HA",
                    description: "This anti-aging mesotherapy treatment is injected into the skin to stimulate cell renewal and collagen production. It is an effective solution to restore radiance by combatting dehydration, sagging, density loss, and sun exposure. It helps correct superficial wrinkles and acts as a complexion booster, by deeply moisturizing and revitalizing tired skin. It also improves elasticity, firmness, pigmentation, and tone."
                },
                {
                    id: 13,
                    image: null,
                    title: "Lipolysis",
                    description: "Injection Lipolysis, also known as lipodissolve or mesotherapy, involves injecting a solution, directly into the fat deposits. The solution breaks down the fat cells, allowing the body to metabolize and eliminate them, leaving you with a more streamlined silhouette. Injection lipolysis chemically reduces the number of fat cells around the injection site. The chemical, called deoxycholic acid, results in fat cell disruption. The duration of the procedure varies depending on the size of the area to be treated, from approximately 20-60 minutes; it is minimally invasive with good results."
                },
                {
                    id: 14,
                    image: Regenera,
                    title: "Regenera",
                    description: "With the revolutionary Regenera Activa Hair Loss Treatment, a unique combination of progenitor cells, growth hormones, and stem cells with potent regeneration qualities is injected into the scalp. This results in increased hair thickness, stimulation of hair growth, and suppression of hair loss."
                },
                {
                    id: 15,
                    image: null,
                    title: "Cryotherapy",
                    description: "The term cryotherapy means low temperature treatment, and refers to the removal of benign skin lesions, such as pre-cancers and warts by freezing them, most commonly with liquid nitrogen. Multiple treatments may be required."
                },
                {
                    id: 16,
                    image: null,
                    title: "Plasma Gel",
                    description: "The Plasma Bio-Filler Facelift is an exciting aesthetic process being introduced in dermatology. The dermal filler gel is autologous and easy to obtain. It works well for fine rhytides reduction as well as to volumize, contour and rejuvenate the face, neck and hands.A crucial benefit of this treatment is that it also stimulates the regenerative cells and growth factors that produce collagen – the body’s natural protein for keeping skin taut, fresh and youthful.The platelets trapped in the gel continue to synthesize and release bioactive growth factors after injection."
                },
                {
                    id: 17,
                    image: null,
                    title: "Meso",
                    description: "The idea behind mesotherapy is that it corrects underlying issues like poor circulation and inflammation that cause skin damage.Mesotherapy is a French rejuvenation technique that uses micro injections of vitamins, enzymes, antioxidants, and plant extracts to rejuvenate and tighten skin, improve hair quality"
                },
                {
                    id: 18,
                    image: null,
                    title: "PDRN",
                    description: "PDRN is a naturally-occurring building block in your DNA that helps to repair damaged skin cells and stimulate collagen production. PDRN skin treatments are a type of skin injectable, comprising biological molecules called Polydeoxyribonucleotide (PDRN), that helps to reverse signs of aging and scars through promoting skin repair"
                },
                {
                    id: 19,
                    image: null,
                    title: "Perfect Derma Peel",
                    description: "The Perfect Derma Peel is a medium-depth chemical peel that revitalizes and rejuvenates the skin. Its blend of powerful ingredients, including glutathione, TCA, and retinoic acid, works to diminish fine lines, acne scars, and sun damage while enhancing skin clarity and texture. This peel is suitable for all skin types and delivers transformative results with minimal downtime, making it ideal for those seeking radiant, youthful skin."
                }
            ]
        }
    },
    {
        id: 4,
        image: service4,
        imageALT: "Facials beauty treatments, deep cleansing, environ, jet peel",
        titleImage: null,
        title: "facials",
        moreinfo: {
            banner: facialsbanner,
            image: null,
            description: "Regular facials are a must to keep your skin feeling healthy and looking fresh. We focus on bringing you the latest, most effective facial treatments to target a variety of skin conditions and concerns. Plus, we personalize our approach to give your complexion the individual care and attention it deserves. With over 20 years’ experience in beauty and anti-aging, our Founder Orsi ensures we offer the highest-quality services that keep our loyal Dubai clients coming back.",
            items: [
                {
                    id: 1,
                    image: Holistic,
                    title: "Holistic",
                    description: "Our holistic facial focuses on your overall well-being, incorporating traditional facial techniques alongside holistic therapy elements. This approach encompasses the mind, body, and spirit, aiming to promote balance and relax the senses, while addressing your specific skin concerns. Enjoy a combination of natural ingredients, including LED crystal shower that targets chakra points, aromatherapy, brain synchronization music, and massage to enhance your skin’s physical appearance and your body’s sense of wellbeing. The holistic facial also combines different types of massage, such as hot stone, face, neck, back decollate, and hands."
                },
                {
                    id: 2,
                    image: deepcleansing,
                    title: "Deep cleansing",
                    description: "If your complexion is feeling clogged and your skin is looking dull, then a deep cleansing facial is for you. This classic treatment typically involves cleansing, steaming and facial massage, followed by the application of a mask, serum and moisturizer. Your therapist may also recommend extraction to remove black and white heads. Deep cleansing facials also give you a moisture boost and are an effective way to tackle breakouts. We can customize the facial based on skin type and concern."
                },
                {
                    id: 3,
                    image: null,
                    title: "Environ",
                    description: "We offer a range of Environ facials and add-ons that can be personalized and are suitable for all ages. Choose from the Essential Youth Reset, Essential Moisture Boost, Essential Comfort Calm, Essential Radiance Reveal and Essential Vitamin Touch. For a super-targeted approach or when time is short, the Focus-On treatments address frown lines, the delicate eye area, skin texture and tone. While the Cool-Peel protocol is a non-invasive, intelligent skin renewal system that helps refine, revive and brighten skin."
                },
                {
                    id: 4,
                    image: null,
                    title: "DMK Enzyme Treatments",
                    description: "DMK Enzyme face treatments harness the power of transfer messenger enzymes that work with certain minerals to fight corrosive free radicals. These treatments go deep beneath the surface to work with the skin and strengthen it from within."
                },
                {
                    id: 5,
                    image: null,
                    title: "DMK StemZyme",
                    description: "For something truly pioneering try StemZyme, which uses an intelligent biomimicry based approach that’s non-invasive and clinically effective in activating epidermal stem cells. It is uniquely customized to combat signs of aging and tackle impaired stem cell function."
                },
                {
                    id: 6,
                    image: null,
                    title: "Dermaplaning",
                    description: `Dermaplaning is a minimally-invasive cosmetic procedure where the therapist uses a special sterile instrument to gently shave away and exfoliate the uppermost layers of your skin, removing peach fuzz. It can help reduce the appearance of scarring and other imperfections by revealing newer, undamaged skin.You can expect improved texture and tone. By removing dead skin cells and fine hairs, your skincare products will penetrate more effectively for a flawless makeup application.`
                },
                {
                    id: 7,
                    image: null,
                    title: "Jet Peel",
                    description: `
                        <p>If you want a revolutionary way to reveal younger, brighter-looking skin, look no further than Jet Peel. This non-invasive cosmetic treatment uses high-speed water pressure to cleanse and exfoliate, penetrating deep under the surface for total freshness. Jet Peel’s benefits include better circulation, improved hydration, smoother texture, and a radiant appearance.</p>
                        <p>Jet Peel 3 steps for healthy and luminous skin:</p>
                        <p>○ Lymphatic drainage<br>
                        ○ Exfoliation<br>
                        ○ Infusion</p>
                        <p>Suitable all skin types it improves overall skin health and works on:</p>
                        <p>○ Fine lines<br>
                        ○ Skin rejuvenation<br>
                        ○ Hyperpigmentation<br>
                        ○ Enlarged pores<br>
                        ○ Dark circles &amp; puffiness<br>
                        ○ Active acne &amp; acne scars<br>
                        ○ Rosacea<br>
                        ○ Irritated &amp; inflamed skin<br>
                        ○ Scar tissue &amp; stretch marks<br>
                        ○ Thinning hair &amp; hair loss<br>
                        ○ Excessive sweating</p>
                        <p>The Hydrafacial works on the epidermis while Jetpeel goes deeper to reach the dermis. By creating microchanneling, JetPeel infuses high-quality products into the skin that boost collagen and improve elasticity. Jet Peel provides visible results with no downtime or skin irritation.</p>
                    `
                },
                {
                    id: 8,
                    image: null,
                    title: "Oxydome",
                    description: "The Oxydome Oxygen facial is a gentle and revitalizing treatment. High-pressure oxygen penetrates deep into the skin to improve blood circulation, activate and hydrate the skin cells and give the skin’s immune system a boost. Suitable for all skin types and safe during pregnancy, you’ll leave looking bright and healthy. LED light therapy is included for antibacterial, healing and anti-aging benefits."
                },
                {
                    id: 9,
                    image: null,
                    title: "Pietro Simone",
                    description: "This Italian brand is renowned for its skin layer treatments fusing powerful skincare formulations and cutting-edge technology for a unique, personalized facial experience. Pietro Simone Skincare is a strategic skin system support, a comprehensive collection of clean, technologically advanced, naturally infused, bio-compatible formulations, entirely dedicated to the well-being of the skin.<br/><br/> The foundation of Pietro Simone Skincare is versatility; a skin inclusivity method made possible by proven ingredients developed into a blueprint for skin enhancement and epidermis support, targeting the multi-faceted needs of individuals with diverse requirements in an evolved world."
                },
                {
                    id: 10,
                    image: SculptFacial,
                    title: "Sculpt Facial with Neurotris",
                    description: "Often referred to as the non-surgical face lift, the Sculpt Facial uses a microcurrent machine that responds to your skin, optimizing results throughout the session. This is an A-List favourite!"
                },
                {
                    id: 11,
                    image: null,
                    title: "Buccal Massage",
                    description: "A buccal facial focuses on massaging the muscles inside the mouth to improve facial contours and reduce tension. It helps tone, tighten, and sculpt the face while boosting circulation."
                },
                {
                    id: 12,
                    image: null,
                    title: "Medical Cryofacial",
                    description: "Cryotherapy technology stimulates the skin with very low temperatures, soft pressure and vibrations, created by spraying a jet of liquid Carbon Dioxide into the skin. Dead skin cells are removed, circulation increased and oxidative stress reduced. Get ready for an immediate feeling of freshness and well-being."
                },
                {
                    id: 13,
                    image: Morpheus,
                    title: "Morpheus",
                    description: "Morpheus8 is a minimally-invasive treatment that combines radiofrequency technology with microneedling. This fractional treatment penetrates deep into the skin for a smoother, sleeker appearance, mostly commonly used to target a double chin, jawline, nose to mouth lines, brow lift and abdomen. Results last for up to two years and it can also be combined with PRF or Exosomes for optimal effects."
                },
                {
                    id: 14,
                    image: null,
                    title: "Skin Pen",
                    description: "The SkinPen treatment works in three simple steps:<br/><br/> For Inflammation, SkinPen’s microneedles penetrate the skin’s surface, triggering a natural immune response to disinfect, remove debris, increase blood flow, and activate the creation of new tissue.<br/><br/> Proliferations: The micro-channels created by SkinPen are rebuilt with new granulation cells that include collagen proteins. Additionally, a new network of blood vessels develops.<br/><br/> Remodelling: New dermal tissues form, rich in collagen and elastin proteins. These proteins improve skin quality, visibly reducing facial acne scars and neck wrinkles, leaving skin more smooth, radiant, and younger-looking."
                },
                {
                    id: 15,
                    image: null,
                    title: "Procell",
                    description: "ProCell Microchanneling is a highly effective, non-invasive skin rejuvenating procedure to improve the appearance of fine lines, hyperpigmentation and scarring. It supports your skin’s overall health by activating natural regeneration processes within your body."
                },
                {
                    id: 16,
                    image: null,
                    title: "Mesogun",
                    description: "Mesogun treatment involves injecting small amounts of skin boosting substances, such as vitamins, minerals, amino acids, and hyaluronic acid using a mesogun device. This is an excellent option to rejuvenate, tighten and hydrate the skin."
                },
                {
                    id: 17,
                    image: null,
                    title: "Peels",
                    description: `
                        <p>We offer a wide variety of peels depending on your skin type and concern. One of our most popular is the Biorepeel – an advanced peel treatment that uses bio-stimulation and active ingredients to refresh and rejuvenate the skin. BioRePeel can be used on different areas of the body.</p>
                        <p>Our other peels include:<br>
                        ○ Lactic Acid<br>
                        ○ TCA<br>
                        ○ Vitamin C<br>
                        ○ Skin Recovery<br>
                        ○ Lightening Peel<br>
                        ○ MCA<br>
                        ○ TC-Age<br>
                        ○ Biogen C<br>
                        ○ Redness Peel<br>
                        ○ Intimate Peel<br>
                        ○ Pink Intimate Peel<br>
                        ○ ME-Line</p>
                    `
                },
                {
                    id: 18,
                    image: null,
                    title: "Cold Plasma-Cool Jet",
                    description: "The Cool Jet that uses plasma discharge technology to convert Oxygen O2, into cold atmospheric plasma, The Plasma plume is then delivered deep into the skin, resulting in a highly effective treatment also known as Cold Plasma. Cool Jet is a non invasive treatment that has no downtime. The results are long lasting. The Cool Jet is suitable for all skin types that targets: Acne, Skin Aging, Laxity Issues, Eczema, Psoriasis and Dermatitis also good for wound Healing and is advisable Post Aesthetic Procedures, Cool Jet also uses for Sun Damages  and Inflammations. Cold Plasma very famous with it’s collagen boost benefits as well."
                },
                {
                    id: 19,
                    image: null,
                    title: "Deep Shoot",
                    description: "Deep Shoot is a Hyaluronic Acid provider integrating innovative pain-free 32G hypodermic multi-needle device(0.5MM), that replenishes and retains moisture for intense hydration and improved radiance and complexion. Deep shoot absorption rate of the solution is 30 times higher than topical application and 15 times higher than MTS devices.Key benefits: Key active ingredients such as : glutathione, Peptides, Growth factors, PDRN and Vitamin B and Hyaluronic Acid complex are replenished to maintain youthful skin condition and reduce of skin aging."
                },
                {
                    id: 20,
                    image: null,
                    title: "CO2 Carboxy Therapy",
                    description: "CO2 Carboxy therapy- when carbon dioxide is absorbed by skin cells from gel, haemoglobin in red blood cells release oxygen. This process provides oxygen to the skin while simultaneously stimulating the blood circulation, metabolism. Protein synthesis and disposal of skin waste. Carboxy therapy is good for body and face, it works on stretchmarks, cellulites. Acne and inflammation while enhancing skin tone. texture, elasticity, and oil balance."
                },
                {
                    id: 21,
                    image: null,
                    title: "Glass Skin Resurfacing",
                    description: "Specifically designed and used for over 10 years by plastic surgeons. Glass Skin Resurfacing is a true mechanical skin resurfacing revolution that corrects the signs of aging, rejuvenates the skin quality and boosts the elastin and collagen production naturally. Skin Resurfacing is a safe 2-actions treatment that requires no downtime and can be used on the body and the face weekly. Depending on the client’s need, the more you progress in the sessions, the greater the efficiency is. Over time, the new cells that regenerate give a tighter, younger-looking skin."
                },
                {
                    id: 22,
                    image: null,
                    title: "Liquid Microneedling - Cellstory",
                    description: "CELLSTORY PLUS Meso-Care is a professional – only safe and hygienic eight-step skin regeneration program that utilizes innovative Microspear, which can be described as liquid microneedles, to awaken the skin’s energy. Fifty thousand Microspear- micro needles are delivered deep into the skin, eliminating dead skin cells naturally to restore glossiness and vitality. CELLSTORY PLUS Meso-Care helps to improve wrinkles, texture, and elasticity, as well as brightens the skin, equalizes skin tone, and enhances the skin’s barrier. The system features a 20 amino acid complex to provide energy and nourishment and is made without harmful preservatives, artificial colors, or artificial fragrance."
                },
                {
                    id: 23,
                    image: null,
                    title: "Cell therapy Skin Fitness",
                    description: "Diathermy cell therapy treatment uses high frequency electromagnetic currents to generate heat within tissues. It is used in physical therapy to deliver moderate heat directly to pathologic lesions in the deeper tissues of the body. During the procedure the therapist needs to precise the energy that activates or slows down cell pulse. This rebalancing and regenerating global action recover the damaged body tissues progressively. Cell therapy- skin fitness program helps to boost the collagen in the body, also, elastin activation to firm the dermis. Improves of local circulation and lymphatic drainage, helps to reduce the pain by increasing blood flow, Diathermy can help to improve mobility and reduce inflammation. Diathermy cell therapy is one the best procedure post-surgical rehabilitation- by reducing pain and promoting tissue healing after surgery. Also, Diathermy can soften and break down scar tissues, improving range of motion and reducing discomfort."
                },
                {
                    id: 24,
                    image: null,
                    title: "Thermolysis",
                    description: "Thermolysis is the best option for definitive removal of all unwanted body hair. The energy or thermolysis is channelled though a delicate needle. Which is inserted through the follicle until it reaches the root where the electrical discharge is applied , causing irreversible damage to the hair germinal cells, thus eliminating the possibility of the growth of a new hair. Best option for stubborn hairs."
                },
                {
                    id: 25,
                    image: null,
                    title: "Forma",
                    description: "Forma is a non-invasive skin tightening treatment that helps to stimulate collagen production and improve the appearance of skin laxity and wrinkles. During a Forma treatment session, the RF energy heats the deeper layers of the skin, causing the existing collagen fibres to contract and stimulating the production of new collagen production. This results in tighter, smoother, and more youthful-looking skin. Forma is commonly used by the people who prefers non-surgical skin tightening on the face, neck, and other areas of the body where tightening is desired. It is  safe and suitable for most skin types, is has no  downtime or discomfort."
                }
            ]
        }
    },
    {
        id: 5,
        image: service5,
        imageALT: "Top wellness procedures available in Dubai to enhance health and well-being.",
        titleImage: null,
        title: "Wellness",
        moreinfo: {
            banner: wellnessbanner,
            image: Wellness400x320,
            description: "At Orskin, we don’t just believe in looking your best, but feeling your best. In addition to our expert skincare and aesthetics treatments, our Wellness Department offers a range of proactive solutions to promote good health from within. IV drips are a highly effective way to feel better fast and we create customized solutions based on your body’s needs. A Hollywood favourite, the NAD IV drip stimulates cell regeneration to reduce inflammation and improve energy. Or why not try a vitamin mix to top up your levels? Or a detox drip to remove unwanted toxins.",
            items: [
                {
                    id: 1,
                    image: null,
                    title: "Our selection of IV wellness drips includes:",
                    description: `– Anti-stress and antioxidant<br/>
– Immune boost and hydration<br/>
– Glowing and radiant skin<br/>
– Cardio support<br/>
– Memory boost<br/>
– Hair regenerate<br/>
– Energy boost & fitness support<br/>
– Vitamin mix<br/>
– Liver detox<br/>
– Female balance<br/>
– Gut healer<br/>
– Customized (VIP anti-aging)<br/>
– Blood boost and iron<br/>
– Diabetic support<br/>
– Customized (HMD)`
                },
                {
                    id: 2,
                    image: null,
                    title: "Exosomes IV therapy ",
                    description: `Exosomes Small extracellular vesicles released by cells
                    <br/>
                    <br/>
-Role: Involved in cell-to-cell communication, transporting proteins, lipids, and nucleic acids.
<br/>
-Impact: Influence recipient cells' behaviour, aiding in immune responses, angiogenesis, and cell proliferation.`
                },
                {
                    id: 3,
                    image: null,
                    title: "Stemcell IV therapy",
                    description: `Stem cells are unique because they are undifferentiated cells capable of differentiating into specialized cell types. They also have the remarkable ability to self-renew, making them highly valuable for tissue repair and regeneration.
                    <br/>
                    <br/>
-Can transform into specialized cell types.
                    <br/>
-Ability to replicate and maintain their population.
                    <br/>
-Tissue repair and regeneration: Crucial for medical treatments and therapies`
                },
                {
                    id: 4,
                    image: null,
                    title: "Anti-Stress and Antioxidant",
                    description: `This is essential to fight against oxidative stress caused by free radicals. Research has shown
that raised glutathione levels decrease muscle
d a m a g e , r e d u c e recovery time, i n c r e a s e
strength a n d e n d u r a n c e a n d shift metabolism
from fat production to muscle development.
`
                },
                {
                    id: 5,
                    image: null,
                    title: "Immunity Boost",
                    description: `This is tailored with high dose of vitamins and
minerals required to boost the body's immune
system. With high dose of ascorbic acid, b
of this i drip, resistsie is indie sod agains:
m o s t p a t h o g e n s .
`
                },
                {
                    id: 6,
                    image: null,
                    title: "Glowing and Radiant Skin",
                    description: `Rich in vitamin C and glutathione, which is vital
to detoxify the skin. Not only is glutathione a
powerful antioxidant, but it is essential for
helping your skin recover from the daily
d a m a g e c a u s e d by sun exposure a n d great at
combating visible signs of ageing.
`
                },
                {
                    id: 7,
                    image: null,
                    title: "Cardio Support",
                    description: `For those who are experiencing cardiovascular
concerns. Infused with alpha-lipoic acid which
is a protective agent against risk factors of
cardiovascular disease, and amino acid which
promotes better cardiovascular functions.`
                },
                {
                    id: 8,
                    image: null,
                    title: "MEMORY BOOST",
                    description: `This contains highly concentrated multi mineral
vitamins, that help in enhancing and boosting
m e m o r y functions. Promising research shows
that B-12 can slow cognitive decline in people
with dementia and early Alzheimer's disease.`
                },
                {
                    id: 9,
                    image: null,
                    title: "HAIR REGENERATE",
                    description: `This is tailored to help the hair looks glossy,
healthy, a n d full. It strengthens the hair a n d
helps prevent hair loss. It is infused with
essential vitamins and minerals such as b
vitamins and zinc to stimulate hair growth.`
                },
                {
                    id: 10,
                    image: null,
                    title: "Energy boost and fitness support",
                    description: `This is for those who are energetic and enjoy
working out at optimum level. Infused with B
vitamins to boost energy levels and, glutamine
that increases your ability to secrete human
growth hormone, which helps metabolize body
fat and support new muscle growth.`
                },
                {
                    id: 11,
                    image: null,
                    title: "Vitamin  Mix",
                    description: `A tailored multi mineral vitamin, necessary to
make you always feel and look great. With a mix
of superantioxidant, immunity booster and
detox drips, this will give you a total wellness
and prevention of any further disorders.`
                },
                {
                    id: 12,
                    image: null,
                    title: "LIVER DETOX",
                    description: `Powerful to cleanse and support your liver
against oxidative s t r e s s . With highly
concentrated superantioxidant glutathione,
aka the great protector, is the main component
of this IV drip. Glutathione is a triple threat to
toxins. This drip neutralizes free radicals,
enhances the immune system and detoxifies the liver. `
                },
                {
                    id: 13,
                    image: null,
                    title: "FEMALE BALANCE",
                    description: `Containing high vitamin-mineral a n d
magnesium which are essential i n balancing
h o r m o n e s a n d dealing with PMS, painful
periods, infertility, pregnancy and weight issues.
"Fluctuating sex h o r m o n e s levels, making,
affect m a g n e s i u m
w o m e n m o r e s e n s i t i v e to
magnesium deficiency than men".`
                },
                {
                    id: 14,
                    image: null,
                    title: "GUT  HEALTH",
                    description: `Rich in glutamine and folic acid that is essential
for improving digestion and leaky gut. The
L-glutamine in this IV drip is essential for the
synthesis of the mucoproteins present in the
m u c o u s secretions of the Gl tract.`
                },
                {
                    id: 15,
                    image: null,
                    title: "BLOOD BOOST AND IRON",
                    description: `This contains iron, needed to produce red blood
cells. Iron absorption is enhanced by
administration of Vitamin C and Vitamin B12
helps your body to produce red blood cells and
keep your nervous system healthy. Folic acid
and vitamin B12 work together to produce red
b l o o d cells.`
                },
                {
                    id: 16,
                    image: null,
                    title: "DIABETIC SUPPORT",
                    description: `Used to reduce high sugar levels and maintain
its optimum range. The high B vitamin complex
concentration of this drip, prevents and targets
peripheral neuropathy associated with DM. It is
also packed with a dose of vitamin D, suggests
that vitamin D deficiency and obesity interact
synergistically to heighten the risk of diabetes
and other metabolic disorders.`
                }
            ]
        }
    },
    {
        id: 6,
        image: service6,
        imageALT: "Latest treatment offers, noxi-systemn",
        titleImage: latest,
        title: "Latest",
        moreinfo: {
            banner: null,
            image: LessPainMoreGain,
            description: "At Orksin, we make the path to perfection as comfortable as possible with innovative devices that minimise soreness.",
            items: [
                {
                    id: 1,
                    title: "Noxi-System",
                    description: "Our Noxi-System is an FDA-approved, self-administered analgesic gas using 50/50 percent oxygen and nitrous oxide to reduce anxiety and discomfort."
                },
                {
                    id: 2,
                    title: "Cool Skin",
                    description: "While Cool Skin uses expert technology to numb the skin ready for your procedure."
                }
            ]
        }
    }
]

export const homeSlider = [
    {
        id: 1,
        image: benner1,
        title: "Orskin Aesthetic Clinic - Home"
    },
    {
        id: 2,
        image: banner2,
        title: "Orskin Aesthetic Clinic - Home"
    },
    {
        id: 3,
        image: benner3,
        title: "Orskin Aesthetic Clinic - Home"
    },
];

export const serviceSlider = [
    {
        id: 1,
        image: servicebanner1,
        title: "Services: wellness, laser treatments, signature facials and slimming procedures."
    },
    {
        id: 2,
        image: servicebanner2,
        title: "Services: wellness, laser treatments, signature facials and slimming procedures."
    },
    {
        id: 3,
        image: servicebanner3,
        title: "Services: wellness, laser treatments, signature facials and slimming procedures."
    },
    {
        id: 4,
        image: servicebanner4,
        title: "Services: wellness, laser treatments, signature facials and slimming procedures."
    },
    {
        id: 5,
        image: servicebanner5,
        title: "Services: wellness, laser treatments, signature facials and slimming procedures."
    }
];

export const partners = [
    {
        id: 1,
        image: dmg,
        title: "dmk cosmetics"
    },
    {
        id: 2,
        image: darma,
        title: "dermaplane"
    },
    {
        id: 3,
        image: nano,
        title: "nanopen"
    },
    {
        id: 4,
        image: nuro,
        title: "neurotris"
    },
    {
        id: 5,
        image: dmg,
        title: "dmk cosmetics"
    },
    {
        id: 6,
        image: darma,
        title: "dermaplane"
    },
    {
        id: 7,
        image: nano,
        title: "nanopen"
    },
    {
        id: 8,
        image: nuro,
        title: "neurotris"
    },
]

export const productData = [
    {
        id: 1,
        imgSrc: "https://shop.orskin.ae/cdn/shop/files/adipeau-active1.jpg?v=1724441336",
        title: "Adipeau - Active Face Cream 50ml",
        price: "AED 320.00",
        url: "https://shop.orskin.ae/products/adipeau-active-face-cream-50ml"
    },
    {
        id: 2,
        imgSrc: "https://shop.orskin.ae/cdn/shop/files/ASCE_-Exobalm-2.png?v=1727022311",
        title: "ASCE+ Exobalm",
        price: "AED 800.00",
        url: "https://shop.orskin.ae/products/asce-exobalm"
    },
    {
        id: 3,
        imgSrc: "https://shop.orskin.ae/cdn/shop/files/P5.jpg?v=1724441790",
        title: "Epicutis Lipid Serum",
        price: "AED 980.00",
        url: "https://shop.orskin.ae/products/epicutis-lipid-serum"
    },
];

export const feedbacks = [
    {
        id: 1,
        "desc": "I had amazing experience in Orskin clinic , all the therapists I have met there are professional, organized, and polite. The Clinic is clean, beautiful and homey… \n The owner(Orsi) is one of the best people I met in my life. I am in love with their services.Absolutely recommend them for their services.",
        "author": "Parastoo Safdari"
    },
    {
        id: 2,
        "desc": "The best place to treat you skin all staff are friendly I have been treating my skin with them for almost two Years and I have been always satisfied with the results they also have the best skin care products which i am always using environ and dmk products have improved my skin texture and help to control my acne",
        "author": "Lama Ibrahim"
    },
    {
        id: 3,
        "desc": "I’ve been going to Orsi for about 3 years, and my skin has never looked better! I’ve lived in Dubai for 21 years, and have tried countless facials. Never once did I go back a 2nd time to anywhere except Orsi. I go every 2 weeks. Every time she does something different depending on what my skin needs at the time. Each facial is totally customized and I leave glowing every single time. Even though she has gone from a 1 room practice in another salon to having her own salon with multiple rooms, the service has not changed and in fact has improved with the addition of different protocols, new product ranges and even body services. Try her out. You will NOT be disappointed!",
        "author": "Tara Deatcher"
    },
    {
        id: 4,
        "desc": "I absolutely love coming here for my monthly facials. From the lovely staff, special teas and even gluten free cookies and snacks while u wait.They have everything you need to to perfect everything on your face and body.During the massage there is numerous massages on your face, neck and arms while your waiting in a mask or under the steam! The treatments here are A++ you have to check them out for a wonderful experience!! Thanks again to everyone at Orskin!",
        "author": "Rachelle Jilla"
    },
    {
        id: 5,
        "desc": "I had an excellent facial treatment at Orskin clinic with the therapist Mme Barbarie, she is very professional and gave me the best advises for my skin. They are using very professional products and good quality. The ambiance and the staff are very pleasant, I definitely recommend this Clinc for any skin type treatment.",
        "author": "Lulu Al Qasmi"
    },
    {
        id: 6,
        "desc": "I’ve been coming to OrSkin for over a year and nothing I have tried did not impress me. The treatments are amazing. The staff is very very friendly. The ambience is wonderful. Today I tried the advalight and literally immediately after the treatment the doctor showed me how the redness in my face subsidized significantly I was very impressed. I can’t wait to go for my next session and also try their other amazing treatments because they are always evolving and adding new state of the art treatments.",
        "author": "Mama Meemz"
    },
    {
        id: 7,
        "desc": "Absolutely the very best Clinic in Dubai… the professionalism of the Founder Orsi is beyond this world. Super clean, very homey clinic with very kind staff. After trying this place I would never go elsewhere. They have all kinds of latest treatments in a super beautiful and very clean environment. Yes!!! Yes!! Yes!!! 6 stars!!!!",
        "author": "Lilla Reti"
    },
    {
        id: 8,
        "desc": "One of the best clinic for facials. Highly highly recommend. Allysia hands are magic and she literally transformed my skin. They suggest what’s best for your skin type and go with a plan. Absolutely love their service and all the latest tools for facials.",
        "author": "Neethu Anzer"
    },
    {
        id: 9,
        "desc": "I thankful for Zarina – massage therapist, for my result after anti-cellulite massage with maderotherapy 6 sessions. I lost weight and had an excellent tone in my whole body. Professional friendly staff. I went to Diana several times -facial therapist for cosmetic procedures and I was happy after holistic faciaI . I wish success and prosperity to “Orskin clinic”. Highly recommend!",
        "author": "Khalid Farukh"
    }
]

export const facialSection = {
    banner: facialBanner,
    bannerALT: "Lady is having face mask or face peeling.",
    titleImage: facialTitle,
    title: "MAKING YOU HAPPY YOU’RE IN YOUR OWN SKIN.",
    description: "Taking care of your skin is a journey. And we’re here to make it a little easier for you. Book your complimentary consultation to get expert advice on the right treatment for you."
}

export const aboutInfo = {
    banner: AboutBanner,
    title: "Our highly experienced skincare experts are qualified andtrained in Europe, US and Asia.Some of our signature services include Advalight Laser, Neurotris Microcurrent Facial, and Morpheus microneedling to name a few.",
    description: "At Orskin, we are driven to help you to achieve your vision of well-being and beauty. Our approach to skincare services is to provide you with an array of holistic and personalized treatments, specifically created to address any of your skin concerns. We use a combination of advanced high- tech devices with conventional methods giving the best possible skincare treatments to all of our clients.We want you to feel and look great!"
}

export const team = [
    {
        id: 1,
        fullName: "Orsolya Matheisz",
        position: "Co-Founder",
        alt: "Orsolya Matheisz Co Founder Orskin aesthetics clinic in dubai",
        description: "Introducing our Co-Founder Orsolya Matheisz, also known as Orsi, a licensed aesthetician from Hungary with a passion for beauty and wellness. With over 18 years of experience in beauty, facial care, and anti-aging. Orsi was inspired to start this company to bring the very best skincare technology solutions to the market, combined with a down- to - earth yet high - end approach.",
        image: OrsolyaMatheisz
    },
    {
        id: 2,
        fullName: "DR. Asima Nasir",
        position: "Medical Director",
        alt: "Dr asima Nasir Medical Director in orskin aesthetics clinic",
        description: "As the medical director of the Orskin Aesthetic Clinic, Dr. Asima Nasir delivers exceptional results while offering the greatest care available. To improve a person's natural beauty, a passionate and dedicated American board-certified aesthetician blends art and science. A holistic approach is employed to treat each patient according to their unique needs after speaking with them and learning about their requirements. Furthermore, at UCAM Spain, Dr. Asima earned a master's degree in business administration with a focus on hospital management.",
        image: DoctorAsima
    },
    {
        id: 3,
        fullName: "Dr. Gustavo Mazariegos",
        position: null,
        alt: "Dr Gustavo Mazariegos",
        description: "Dr. Gustavo Mazariegos is a leader in Aesthetic Medicine and Hair Restoration with over a decade of experience. A Professor of Master’s in Facial Aesthetic Medicine, he is internationally renowned for his skills in treatments such as Botox, Filler, Non-Surgical Face Lift, and Facial Harmonisation, achieving natural results for a more striking, streamlined complexion. He is also a highly sought-after Trichologist and Hair Transplant Surgeon.",
        image: DoctorGustavo
    },
    {
        id: 4,
        fullName: "Dr. Shagoon Modi",
        position: "Aesthetic Medicine Doctor",
        alt: "Dr. Shagoon Modi",
        description: "Dr Shagoon is an Aesthetic Medicine Doctor. She has 5 years of experience as a Doctor with a background in General Medicine and Plastic surgery in the UK. She started her aesthetic medicine practice from training in the world-renowned Harley Street in London. She is dedicated to constantly improving her skills through practical courses and ongoing education in Dermatology and Aesthetics. She prioritizes treatments that deliver natural but noticeable results. ",
        image: DoctorShagoon
    }
]

export const blogs = [
    {
        id: 1,
        title: "Platelet Rich Fibrin (PRF) Plasmagel",
        cover: blog1cover,
        coverMin: blog1cover,
        introduction: "Gently exfoliate away dull, dead skin with the age-defying, complexion-boosting PHA Hydration Peel!",
        description: `
            <p data-aos="zoom-in">In order to, rejuvenate your skin, Orskin Aesthetic Clinic uses two cutting-edge procedures called platelet-rich fibrin (PRF) and plasma gel, often known as bioscience. These procedures harness the power of your body’s own healing capabilities. Although they both use platelet-rich components as a basis, their applications and advantages are different. Both techniques offer a natural and holistic approach to skin rejuvenation, harnessing the power of your body’s own healing mechanisms.</p>
            <br>
            <br>
            <h2 data-aos="zoom-in"><strong>PRF:</strong></h2>
            <br>
            <p data-aos="zoom-in" >Platelet-Rich Fibrin (PRF) therapy is a cutting-edge treatment that utilizes the healing properties of your own blood to promote tissue repair. PRF is a concentrated form of platelet-rich plasma (PRP) that is processed to create a fibrin matrix. It is derived by collecting a small amount of the patient’s blood, which is then centrifuged to separate the platelets, growth factors, and other beneficial components from the rest of the blood.&nbsp; Platelet-Rich Fibrin (PRF) treatment is a safe and innovative therapy that utilizes your body’s natural healing properties.</p>
            <p data-aos="zoom-in" >Key features:<br>
            1. Fibrin Matrix : This matrix functions as a scaffold to facilitate tissue and wound healing by supporting platelets and other growth factors.<br>
            2. Slow Release of Growth Factors<br>
            3. Rich in Leukocytes</p>
            <br>
            <br>
            <p data-aos="zoom-in" ><strong>Plasma gel / Bio filler</strong></p>
            <p data-aos="zoom-in" >Plasma gel bio filler is a type of dermal filler derived from a patient’s own blood plasma. The process involves drawing a small amount of blood, which is then centrifuged to separate the plasma from the red blood cells. The plasma is heated to create a gel-like consistency. This plasma gel is then injected into the skin to act as a natural filler.</p>
            <br>
            <p data-aos="zoom-in" >The primary advantages of plasma gel bio filler are its biocompatibility and low risk of allergic reactions or side effects, as it is derived from the patient’s own body. At Orskin Aesthetics Plasma Gel&nbsp; is commonly used for facial rejuvenation, reducing wrinkles, and adding volume to areas like the cheeks and lips. The results are generally subtle and natural-looking, and because it is autologous (coming from the same individual), it reduces the risks associated with synthetic fillers. Plasma Gel Bio Filler: A Natural Approach to Skin Rejuvenation. The plasma) filler is then injected into areas of the face where volume is needed, such as the cheeks, under-eye area, and lips.</p>
            <br>
            <p data-aos="zoom-in" >Plasma gel bio filler is an innovative and natural method for facial rejuvenation, offering a compelling alternative to synthetic dermal fillers. This treatment harnesses the power of your own blood plasma to create a gel-like substance that can be injected to enhance facial volume, reduce wrinkles, and promote a youthful appearance.</p>
            <br>
            <p data-aos="zoom-in" ><strong>Benefits of Plasma Gel Bio Filler</strong></p>
            <p data-aos="zoom-in" >Biocompatibility: Since the filler is derived from your own blood, there is a significantly reduced risk of allergic reactions or adverse side effects. Orskin Aesthetics Believe in Natural Results : The plasma gel integrates seamlessly with your tissue, providing subtle, natural-looking enhancements.</p>
            <br>
            <p data-aos="zoom-in" ><strong>Safety</strong></p>
            <p data-aos="zoom-in" >The use of autologous plasma eliminates the risk of introducing foreign substances into your body.Rejuvenation: In addition to adding volume, the growth factors in the plasma can stimulate collagen production, improving skin texture and elasticity over time.</p>
            <br>
            <p data-aos="zoom-in" >The best homecare product after the Plasma Gel or PRF is definitely &nbsp;Adipeau Cream</p>
            <p data-aos="zoom-in" >To maximize the benefits of plasma gel bio filler and maintain healthy, rejuvenated skin, incorporating a high-quality homecare product like Adipea Cream into your skincare routine is highly recommended.</p>
            <br>

            <p data-aos="zoom-in" ><strong>What is Adipeau Cream?</strong></p>
            <p data-aos="zoom-in" >Adipea Cream is a specialized skincare product designed to complement and enhance the effects of aesthetic treatments like plasma gel bio filler. It is formulated with a blend of active ingredients that promote volume lost, &nbsp;hydration, skin repair, and regeneration.</p>
            <br>

            <p data-aos="zoom-in" ><strong>Benefits of Adipeau Cream</strong></p>
            <ul>
            <li data-aos="zoom-in"  style="list-style:square">Hydration: Deeply moisturizes the skin, helping to maintain the plumpness and smoothness achieved with plasma gel fillers.</li>
            <li data-aos="zoom-in"  style="list-style:square">Repair and Regeneration: Contains ingredients that support skin healing and regeneration, enhancing the longevity of the filler effects.</li>
            <li data-aos="zoom-in"  style="list-style:square">Protection: Provides a protective barrier against environmental damage, helping to maintain the health and appearance of your skin.</li>
            <li data-aos="zoom-in"  style="list-style:square">Anti-Aging: Packed with antioxidants and nutrients that educe the appearance of fine lines and wrinkles.</li>
            </ul>
            <br/>
            <p data-aos="zoom-in" ><strong>How to Use Adipeau Cream</strong></p>
            <p data-aos="zoom-in" >For best results, apply Adipeau Cream twice daily, in the morning and at night, on clean, dry skin. Gently massage the cream into your face and neck using upward strokes, ensuring even coverage. Consistent use will help sustain the rejuvenating effects of the plasma gel bio filler, keeping your skin looking vibrant and youthful.</p>
            <br/>

            <p data-aos="zoom-in" >Adipeau cream is a long-term treatment that gives a filler effect on the volume loss by aging or due to the environmental issues, it usually take approximately around 6 to 8 weeks but the result is promising.</p>`,
        products: [
            {
                id: 1,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/adipeau-active1.jpg",
                title: "Adipeau - Active Face Cream 50ml",
                url: "https://shop.orskin.ae/products/adipeau-active-face-cream-50ml",
                description: "The Adipeau face cream promotes new cell formation and encourages healthy, plump radiant skin. It restores your skin super powers by targeting the root foundation by delivering nutrition to the skin’s root structure. This requires a different application method that what you may be used to. Apply to areas that are depleted and sagging."
            },
        ]
    },
    {
        id: 2,
        title: "Winter skin renewal means peel season is here!",
        cover: blog2cover,
        coverMin: blog2cover,
        introduction: "Winter is the absolute best time of the year! Who doesn’t love the winter season in Dubai -cooler temperatures, less humidity and… knowing that chemical peel season has arrived?",
        description: `<h2 data-aos="zoom-in"  class="text-[20px] mb-[16px]"> <strong>Winter is the absolute best time of the year! Who doesn’t love the winter season in Dubai -cooler temperatures, less humidity and… knowing that chemical peel season has arrived?</strong></h2>
        <h3 data-aos="zoom-in"  class="text-[18px] mb-[16px]"><strong>So, what is all the hype around winter being peel season?</strong></h3>
        <p data-aos="zoom-in" >Because winter is the ideal time for deeper exfoliation. Why?<br>
        – Less sun exposure<br>
        – Fewer post-peel complications like hyperpigmentation<br>
        – Faster recovery and better healing</p>
        <br/>
        <p data-aos="zoom-in" >New skin for the new year. Get that holiday glow by exfoliating away the layers of dull summer skin to reveal a brighter complexion.</p>
        <p data-aos="zoom-in" >Orskin Aesthetic’s peel options provide a transformative experience that will leave you looking and feeling fabulous. Our selection of peels and combination treatments is designed to address your specific skin concern, including fine lines, sun damage, and uneven skin tone.<br/>
        That’s why peel season marks a golden opportunity to revitalize your complexion and rediscover your glow.</p>
        <br/><br/>
        <h3 data-aos="zoom-in"  class="text-[18px] mb-[16px]"> <strong>Benefits of an Orskin chemical peel</strong></h3>
        <p data-aos="zoom-in" >Customization is key. At Orskin our aesthetician will tailor the treatment to your skin’s needs. We will start by providing you with a proper skin analysis with the help of a special device to see beneath the top layers of the skin and identify any issues. Then, we will recommend a peel type based on our three-level system that ranges from a mild enzyme peel to a more advanced chemical peel.</p>
        <br/>
        <h3 data-aos="zoom-in"  class="text-[18px] mb-[16px]"><strong>Is it safe to do a peel during pregnancy and breastfeeding?</strong></h3>
        <p data-aos="zoom-in" >Orskin offers a wide range of peels suitable during pregnancy and that work well to tackle the impact of hormonal changes. They can be performed when the skin is breaking out or when it is very dry.</p>
        <br/>
        <h3 data-aos="zoom-in"  class="text-[18px] mb-[16px]"><strong>No peel chemical peels?</strong></h3>
        <p data-aos="zoom-in" >For those who are a bit nervous or don’t want to get a peel before a big event or holiday, we can offer our no-peel peels without any downtime. They also work well for sensitive skin.</p>
        <br/>
        <h3 data-aos="zoom-in"  class="text-[18px]"><strong>Home peels</strong></h3>
        <p data-aos="zoom-in" >Our medical-grade home peels give you professional results away from the clinic. Some of our favorites include:</p>
        <br/>
       <h3 data-aos="zoom-in"  class="text-[18px] mb-[6px]"><strong>We focus on results</strong></h3>
        <p data-aos="zoom-in" >We know you want to see a difference in your skin. With the right care and best-quality customized treatments, you will soon reveal your true radiance.</p>
        <p data-aos="zoom-in" >With the help of one of Orskin’s bespoke Peel Treatments, you will achieve the most vibrant look ever. It will help treat skin tone, firmness, discolouration, and dark circles.</p>
        <br/>
        <p data-aos="zoom-in" >Unleash your skin glow before the New Year!</p>`,
        products: [
            {
                id: 1,
                imgSrc: blog2product1,
                title: "Environ Lactic Acid Night Cream",
                url: "https://shop.orskin.ae/collections/all",
                description: "Perfect for sensitive and dehydrated dry skin, it is an excellent exfoliator and highly effective moisturizer."

            },
            {
                id: 2,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/Micro-Peel-180ml.jpg",
                title: "Micro Peel from DMK",
                url: "https://shop.orskin.ae/products/dmk-micro-peel-180ml",
                description: "This peel is suitable for all skin types except sensitive skin and can be used for the face and body. It contains glycolic acid, citric acid, and lactic acid, making it a great treatment for back acne, rough bumpy patches on the arms, clogged pores, and overall skin brightening"
            },
            {
                id: 3,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/PHA-Hydration-Peel.jpg",
                title: "PHA from Cosmedix",
                url: "https://shop.orskin.ae/products/pha-hydration-peel",
                description: "A good way to replenish moisture and target signs of aging, this gentle peel contains lactobionic acid and has a relaxing, cooling effect when applied."
            }
        ]
    },
    {
        id: 3,
        title: "Fall is the Perfect Time for Laser Treatments.",
        cover: blog3cover,
        coverMin: blog3coverMin,
        introduction: "At  Orskin Aesthetics we are offering special protocols when it comes to laser treatments, it is customised for each patient needs and concern.",
        description: `
        <p data-aos="zoom-in" >
        At  Orskin Aesthetics we are offering special protocols when it comes to laser treatments, it is customised for each patient needs and concern.</p>
        <br/> 
        <p data-aos="zoom-in" > As the crisp autumn air sets in, it's the ideal season to invest in your skin’s rejuvenation with laser treatments. At Orskin Aesthetics, we are excited to offer cutting-edge solutions to keep your skin looking youthful and radiant with our latest generation laser technologies. But what is the star of our offerings?</p>
        <br/> 
        <p data-aos="zoom-in" >The revolutionary UltraClear and AdvaLight laser treatments, both designed to transform your skin.</p> <br/>
        <p data-aos="zoom-in" ><b>UltraClear</b>: The Latest Innovation in Skin Rejuvenation
        <br/>
        With the introduction of the UltraClear laser at Orskin, we’re thrilled to offer the world’s first cold ablative fiber laser treatment. UltraClear is superior to CO2 lasers enhanced safety, less downtime and more comfortable experience.  UltraClear is FDA-approved technology,  suitable for all skin types, providing non-invasive yet highly effective skin rejuvenation.
        </p>
        <br/>
         <p data-aos="zoom-in">The UltraClear laser can be customised to  penetrate the surface, mid-dermis, and deeper skin layers, working its magic by vaporizing damaged surface cells and stimulating collagen and elastin production underneath. This process accelerates your skin's natural healing abilities, reducing fine lines and leaving your skin smoother, healthier, and more luminous.</p>
        <br/>

        <p data-aos="zoom-in"><b > Why Choose UltraClear?</b></p>
        <br/>
        <ul>
            <li data-aos="zoom-in" >Deep collagen remodeling for age-defying results.</li>
            <li data-aos="zoom-in" >Surface-level skin quality enhancement with minimal recovery time.</li>
            <li data-aos="zoom-in" >Options for quick lunchtime treatments or more extensive anti-aging care</li>
            <li data-aos="zoom-in" >Safe and effective for all skin types</li>
        </ul>
        <br/>
        <p data-aos="zoom-in">The UltraClear laser accelerates the skin's natural healing process by vaporizing damaged surface skin and delivering controlled thermal energy to underneath layers, which increases the creation of collagen and elastin. As a result, there are less fine lines on skin that is smoother, healthier, and many more.</p>
        <br/>
        <br/>
        <p data-aos="zoom-in" >We all know uniqueness of <b>AdvaLight</b> Laser: Think about a laser that targets for than 25 concerns at the same time, thanks  to it’s 589 and 1319 nn , AdvaLight can address everything from wrinkles and fine lines to acne, rosacea, pigmentation problems, and vascular concerns. </p>
        <br/>
        <br/>
        <p data-aos="zoom-in" ><b >Preparing Your Skin with PRF and Salmon DNA for Optimal Results</b></p>
        <br/>
        <p data-aos="zoom-in" >Before undergoing laser treatments like UltraClear or AdvaLight, it’s essential to prepare your skin properly to enhance healing and ensure the best results. At Orskin, we recommend Platelet-Rich Fibrin (PRF) or Salmon DNA therapy as part of your pre-treatment regimen. Both treatments work to supercharge your skin’s healing potential, creating a perfect foundation for laser procedures.</p>
        <br/>
        <p data-aos="zoom-in"><b>But What Does AdvaLight Treat?</b></p>
        <p data-aos="zoom-in" class="mb-[10px]">
         - Melasma and unwanted pigmentation.<br/>
         - Wrinkles and fine lines.<br/>
         - Acne scars and oil production.<br/>
         - Sun damage and dyschromia.
        </p>
        <p data-aos="zoom-in">Beyond its versatility, AdvaLight is known for its safety and efficacy. Its intelligent design includes preset treatment modes, ensuring the most effective and safe results for our clients.</p>
        <br/>
        <p data-aos="zoom-in"><b>Preparing Your Skin with PRF and Salmon DNA for Optimal Results</b></p>
        <p data-aos="zoom-in">Before undergoing laser treatments like UltraClear or AdvaLight, it’s essential to prepare your skin properly to enhance healing and ensure the best results. At Orskin, we recommend Platelet-Rich Fibrin (PRF) or Salmon DNA therapy as part of your pre-treatment regimen. Both treatments work to supercharge your skin’s healing potential, creating a perfect foundation for laser procedures.</p>
        <br/>
        <p data-aos="zoom-in"><b>PRF:</b> This natural serum, drawn from your own blood, is rich in growth factors that stimulate cell repair and rejuvenation. When applied before laser treatments, PRF enhances the skin's ability to heal, reduces inflammation, and promotes collagen production.
        </p>
        <br/>
        <p data-aos="zoom-in"><b>Salmon DNA:</b> Packed with nutrients and antioxidants, salmon DNA helps to repair damaged skin cells and boost collagen synthesis, creating a strong, healthy canvas for your laser treatment.</p>
        <br/>
        <p><b>Post-Care:</b> Ensuring Long-Lasting Results</p>
        <p>Post-laser care is just as important as pre-treatment preparation. After your session, we’ll provide you with a customized post-care plan, including hydration, sun protection, and the use of soothing products like our Aura Face Shield. This advanced shield helps calm and protect the skin while accelerating the healing process.</p>
        <br/>
        <br/>
        <p data-aos="zoom-in" >Post-Treatment Tips:</p>
        <p data-aos="zoom-in" class="mt-[10px]">Follow a gentle skincare routine to allow your skin to recover.</p>
        <p data-aos="zoom-in" class="mt-[10px]">To encourage healing, After a range of aesthetic procedures you would require couple or products to  keep your skin well-hydrated. <p>
        <br/>
        <p data-aos="zoom-in" ><b >Medical foundation from Oxygenetix</b></p>
        <br/>
        <p data-aos="zoom-in" >Oxygenating Foundation breathes and protects your skin as you wear it. By using the unique Oxygenetix aloe vera base, this foundation is calming and soothing.
        Enjoy seeing the natural beauty of your skin shine through. Goes on sheer but once set, you can build as much as you wish to cover blemishes and any imperfections to give you the finish that you desire. And, it lasts longer and feels lighter than other foundations so you can wear it all day and won't need to keep reapplying it. </p>
        <br/>
        <p data-aos="zoom-in" >Our goal at Orskin Aesthetics is to use our cutting-edge laser treatments to help you attain healthy, glowing skin. Whether you choose a superficial or deep rejuvenation, our cutting-edge technologies, along with the proper pre- and post-treatment care, can help you get the radiant skin you deserve. The time is right to make an investment in the future of your skin. Get your consultation scheduled with us right now to learn more about the benefits of AdvaLight and UltraClear laser treatments!</p>
        <br/>
        <p data-aos="zoom-in" >Now is the perfect time to invest in your skin’s future. Contact us today to schedule your consultation and discover the power of UltraClear and AdvaLight laser treatments!</p>

`,
        products: [
            {
                id: 1,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/ASCE_-Exobalm-2.png",
                title: "ASCE+ Exobalm",
                description: "Exobalm's special EXO CAPSULE blended composition greatly heals damaged skin, minimizes downtime, and has long-lasting healing effects. A balm solution designed to promote healing, hydration, anti-pigmentation, and relaxation.",
                url: "https://shop.orskin.ae/products/asce-exobalm"
            },
            {
                id: 2,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/2.jpg",
                title: "Soothe Dermal Repair Mist",
                description: "Soothe Dermal Repair Mist from Epicuren is an ultra-light toner that is designed with superior ingredients to reduce the appearance of sensitivity.Recommended for All skin types.",
                url: "https://shop.orskin.ae/products/soothe-dermal-repair-mist"
            },
            {
                id: 3,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/P1.jpg",
                title: "Epicutis Recovery Mask",
                description: "Epicutis Recovery Mask- An ultra-concentrated version of our Lipid Serum delivered through a bio-cellulose mask, this deeply healing treatment instantly calms and soothes our skin in as little as 10–15 minutes.",
                url: "https://shop.orskin.ae/products/epicutis-lipid-recovery-box-of-masks"
            },
            {
                id: 4,
                imgSrc: "https://shop.orskin.ae/cdn/shop/files/P5.jpg",
                title: "Epicutis Lipid Serum ",
                description: " Epicutis Lipid Serum With only eight ingredients, this gentle formula is an essential member of your healing arsenal. delivers an instant dose of relief for dry, stressed, sensitive or post-procedure skin-PLUS proven healthy-skin benefits that build over time.",
                url: "https://shop.orskin.ae/products/epicutis-lipid-serum"
            }
        ]
    }
]

export const seoContent = {
    home: {
        id: 1,
        title: "Orskin Aesthetics Clinic in Dubai | Skincare products & Treatments",
        description: "Orskin Aesthetic Clinic in Dubai offers slimming, wellness, signature facials, and latest laser treatments. Focusing on personalized care and top-quality skincare, Orskin delivers transformative results in a luxurious setting, making your beauty goals a priority.",
        keywords: "",
        canonical: "https://www.orskin.ae",
        schema: `
               {
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Orskin Aesthetic Clinic",
                "url": "https://www.orskin.ae/",
                "logo": "https://www.orskin.ae/assets/logo-CnwgVcVk.png",
                "image": [
                    "https://www.orskin.ae/assets/service2-CeFVQCHM.jpg",
                    "https://www.orskin.ae/assets/service1-BNft6HlT.jpg",
                    "https://www.orskin.ae/assets/service3-REL2V-_H.jpg",
                    "https://www.orskin.ae/assets/facial-banner-CENLn1Yy.jpg",
                    "https://shop.orskin.ae/cdn/shop/files/adipeau-active1.jpg?v=1724441336",
                    "https://shop.orskin.ae/cdn/shop/files/ASCE_-Exobalm-2.png?v=1727022311",
                    "https://shop.orskin.ae/cdn/shop/files/P5.jpg?v=1724441790"
                ],
                "description": "Orskin Aesthetic Clinic in Dubai offers slimming, wellness, signature facials, and the latest laser treatments. Focusing on personalized care and top-quality skincare, Orskin delivers transformative results in a luxurious setting, making your beauty goals a priority.",
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
                    "https://www.facebook.com/orskin.ae",
                    "https://www.instagram.com/orskin.ae"
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
                ]
                }
                `
    },
    about: {
        id: 2,
        title: "The Best Aesthetic Doctors in Dubai | Expert Doctors in Aesthetic",
        description: "Orskin Aesthetic Clinic in Dubai offers advanced aesthetic treatments with global expertise. Experience Advalight Laser, Neurotris Microcurrent Facial, and Morpheus Microneedling",
        keywords: "",
        canonical: "https://orskin.ae/about-us",
        schema: `
        {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Orskin Aesthetic Clinic",
            "url": "https://www.orskin.ae/about-us",
            "logo": "https://www.orskin.ae/assets/logo-CnwgVcVk.png",
            "image": [
                "https://www.orskin.ae/assets/team-co-BppUgFf-.jpg",
                "https://www.orskin.ae/assets/team-dr2-Dv0KbIuq.jpg",
                "https://www.orskin.ae/assets/team-dr1-DGWkyuvE.jpg",
                "https://www.orskin.ae/assets/team-dr3-DFT5prVC.jpeg",
                "https://www.orskin.ae/assets/team-Cfhm_83u.jpg"
            ],
            "description": "Orskin Aesthetic Clinic in Dubai offers advanced aesthetic treatments with global expertise. Experience Advalight Laser, Neurotris Microcurrent Facial, and Morpheus Microneedling.",
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
                "https://www.facebook.com/orskin.ae",
                "https://www.instagram.com/orskin.ae"
            ],
            "medicalSpecialty": "Aesthetic Medicine",
            "openingHours": [
                "Mo-Sa 09:00-21:00",
                "Su 10:00-19:00"
            ]
            }`
    },
    services: {
        id: 3,
        title: "Wellness, Laser Treatments, Signature Facials and Slimming procedures.",
        description: "At Orskin Aesthetics in Dubai, we offer a variety of exceptional beauty and wellness services tailored to your needs. From rejuvenating wellness treatments, advanced laser therapies, and signature facials to slimming procedures, aesthetic injectables, fat burning treatments.",
        keywords: "",
        canonical: "https://orskin.ae/services",
        schema: ``
    },
    blog: {
        id: 4,
        title: "What You Need to Know About Skin Care, Wellness, Slimming, and Beauty",
        description: "Discover expert insights, beauty tips, skin care treatments, and wellness advice on the Orskin Aesthetic Clinic blog. Find the latest trends in aesthetic procedures, wellness routines, and skin rejuvenation in Dubai.",
        keywords: "",
        canonical: "https://orskin.ae/blog",
        schema: ``
    },
    contact: {
        id: 5,
        title: "",
        description: "",
        keywords: "",
        canonical: "https://orskin.ae/contact",
        schema: ``
    }
}