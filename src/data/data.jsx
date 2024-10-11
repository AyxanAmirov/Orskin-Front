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
import product1 from "../User/assets/image/product1.webp"
import product2 from "../User/assets/image/product2.webp"
import product3 from "../User/assets/image/product3.webp"
import facialBanner from "../User/assets/image/facial-banner.jpg";
import facialTitle from "../User/assets/image/facial-title.png";
import AboutBanner from "../User/assets/image/aboutus-banner.jpg";
import OrsolyaMatheisz from "../User/assets/image/team-co.jpg";
import DoctorGustavo from "../User/assets/image/team-dr1.jpg";
import DoctorAsima from "../User/assets/image/team-dr2.jpg";
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

export const services = [
    {
        id: 1,
        image: service3,
        titleImage: lazer,
        title: "LASER",
        moreinfo: {
            banner: LaserBanner,
            image: service3v500x500,
            description: "Our aestheticians use the advanced ADVATx, which is among the most sophisticated dermatology lasers in the world and can be used for multiple stand-alone and combination therapies. Advalight combines high-powered yellow and infrared laser energy to improve skin tone, texture and overall dermal health, making it particularly beneficial for conditions including psoriasis, rosacea, sun damage, wrinkles, spider veins, blemishes, and birth marks.",
            items: null
        }
    },
    {
        id: 2,
        image: service2,
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
                    description: "Renuva is a non-surgical fat grafting solution designed to restore your natural contours. As we age, our faces naturally lose subcutaneous fat. The treatment uses a matrix of adipose-derived stem cells to regenerate fat cells, adding almost instantaneous fat volume in depleted areas of the skin for a smoother, more youthful look. Renuva is the first and only over-the-counter product that uses the body’s own fat to replenish age-related volume loss. Renuva is a non-surgical fat grafting solution designed to restore your natural contours. As we age, our faces naturally lose subcutaneous fat. The treatment uses a matrix of adipose-derived stem cells to regenerate fat cells, adding almost instantaneous fat volume in depleted areas of the skin for a smoother, more youthful look. Renuva is the first and only over-the-counter product that uses the body’s own fat to replenish age-related volume loss. Renuva is exclusively administered by skilled aesthetic injectors and can be injected anywhere that fat naturally occurs."
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
                    description: "Skin boosters (also known as injectable moisturizers or microinjections) involve injecting hyaluronic acid-based substances directly into the skin to improve texture, elasticity, hydration and overall appearance. Skin boosters are commonly used to rejuvenate the face, neck, and hands, but they can be applied to other areas of the body.The treatment is usually performed in a series of sessions, spaced a few weeks apart, to achieve optimal results.Unlike traditional dermal fillers, skin boosters provide a natural- looking improvement in skin quality without significantly altering facial contours."
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
                    description: "How does exosomes work? Exosomes’ mode of action is very unique as it follows specific selective cellular signals that act as messengers detecting inflammatory signals and delivering regenerative, anti- inflammatory factors to target cells."
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
                }
            ]
        }
    },
    {
        id: 4,
        image: service4,
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
                    description: "This Italian brand is renowned for its skin layer treatments fusing powerful skincare formulations and cutting-edge technology for a unique, personalized facial experience. Pietro Simone Skincare is a strategic skin system support, a comprehensive collection of clean, technologically advanced, naturally infused, bio-compatible formulations, entirely dedicated to the well-being of the skin. The foundation of Pietro Simone Skincare is versatility; a skin inclusivity method made possible by proven ingredients developed into a blueprint for skin enhancement and epidermis support, targeting the multi-faceted needs of individuals with diverse requirements in an evolved world."
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
                    description: "The SkinPen treatment works in three simple steps: For Inflammation, SkinPen’s microneedles penetrate the skin’s surface, triggering a natural immune response to disinfect, remove debris, increase blood flow, and activate the creation of new tissue. Proliferations: The micro-channels created by SkinPen are rebuilt with new granulation cells that include collagen proteins. Additionally, a new network of blood vessels develops. Remodelling: New dermal tissues form, rich in collagen and elastin proteins. These proteins improve skin quality, visibly reducing facial acne scars and neck wrinkles, leaving skin more smooth, radiant, and younger-looking."
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
        titleImage: null,
        title: "Wellness",
        moreinfo: {
            banner: wellnessbanner,
            image: Wellness400x320,
            description: "At Orskin, we don’t just believe in looking your best, but feeling your best. In addition to our expert skincare and aesthetics treatments, our Wellness Department offers a range of proactive solutions to promote good health from within. IV drips are a highly effective way to feel better fast and we create customized solutions based on your body’s needs. A Hollywood favourite, the NAD IV drip stimulates cell regeneration to reduce inflammation and improve energy. Or why not try a vitamin mix to top up your levels? Or a detox drip to remove unwanted toxins.",
            items: null
        }
    },
    {
        id: 6,
        image: service6,
        titleImage: latest,
        title: "Latest",
        moreinfo: {
            banner: null,
            image: "",
            description: "",
            items: null
        }
    }
]

export const homeSlider = [
    {
        id: 1,
        image: benner1
    },
    {
        id: 2,
        image: banner2
    },
    {
        id: 3,
        image: benner3
    },
];

export const serviceSlider = [
    {
        id: 1,
        image: servicebanner1
    },
    {
        id: 2,
        image: servicebanner2
    },
    {
        id: 3,
        image: servicebanner3
    },
    {
        id: 4,
        image: servicebanner4
    },
    {
        id: 5,
        image: servicebanner5
    }
];

export const partners = [
    {
        id: 1,
        image: dmg,
        title: "dmg logo"
    },
    {
        id: 2,
        image: darma,
        title: "darma logo"
    },
    {
        id: 3,
        image: nano,
        title: "nano logo"
    },
    {
        id: 4,
        image: nuro,
        title: "nuro logo"
    },
    {
        id: 5,
        image: dmg,
        title: "dmg logo"
    },
    {
        id: 6,
        image: darma,
        title: "darma logo"
    },
    {
        id: 7,
        image: nano,
        title: "nano logo"
    },
    {
        id: 8,
        image: nuro,
        title: "nuro logo"
    },
]

export const productData = [
    {
        id: 1,
        imgSrc: product1,
        title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
        price: "AED 496.32 + VAT",
    },
    {
        id: 2,
        imgSrc: product2,
        title: "Epicuren – Pumpkin Apple Spice Peel",
        price: "AED 391.00 + VAT",
    },
    {
        id: 3,
        imgSrc: product3,
        title: "Epicuren – Protein Mist Enzyme Toner",
        price: "AED 145.20 – AED 238.92 + VAT",
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
    titleImage: facialTitle,
    title: "MAKING YOU HAPPY YOU’RE IN YOUR OWN SKIN.",
    description: "Taking care of your skin is a journey. And we’re here to make it a little easier for you. Book your complimentary consultation to get expert advice on the right treatment for you."
}

export const aboutInfo = {
    banner: AboutBanner,
    title: "Our highly experienced skincare experts are qualified andtrained in Europe, US and Asia.Some of our signature services include Advalight Laser, Neurotris Microcurrent Facial, and Morpheus microneedling to name a few.",
    description: "At Orskin, we are driven to help you to achieve your vision of well-being and beauty. Our approach to skincare services is to provide you with an array of holistic and personalized treatments, specifically created to address any of your skin concerns. <br /> <br />We use a combination of advanced high- tech devices with conventional methods giving the best possible skincare treatments to all of our clients.We want you to feel and look great!"
}

export const team = [
    {
        id: 1,
        fullName: "Orsolya Matheisz",
        position: "Co-Founder",
        description: "Introducing our Co-Founder Orsolya Matheisz, also known as Orsi, a licensed aesthetician from Hungary with a passion for beauty and wellness. With over 18 years of experience in beauty, facial care, and anti-aging. <br><br>Orsi was inspired to start this company to bring the very best skincare technology solutions to the market, combined with a down- to - earth yet high - end approach.",
        image: OrsolyaMatheisz
    },
    {
        id: 2,
        fullName: "Dr. Gustavo Mazariegos",
        position: null,
        description: "Dr. Gustavo Mazariegos is a leader in Aesthetic Medicine and Hair Restoration with over a decade of experience. A Professor of Master’s in Facial Aesthetic Medicine, he is internationally renowned for his skills in treatments such as Botox, Filler, Non-Surgical Face Lift, and Facial Harmonisation, achieving natural results for a more striking, streamlined complexion. He is also a highly sought-after Trichologist and Hair Transplant Surgeon.",
        image: DoctorGustavo
    },
    {
        id: 3,
        fullName: "DR. Asima Nasir",
        position: "Medical Director",
        description: "An enthusiastic and committed American board-certified aesthetic physician combines art and science to enhance one’s inherent attractiveness. After consulting with the patient and learning about their needs, a holistic approach is used to treat each individual patient in accordance with their specific needs. As a staff member of the Orskin Aesthetic Clinic, Dr. Asima Nasir provides the best treatment possible while producing outstanding outcomes.Additionally, Dr. Asima completed a master’s degree in business administration in healthcare management at UCAM Spain.",
        image: DoctorAsima
    }
]