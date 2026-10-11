import type { AestheticTreatment } from "@/lib/types";

/**
 * Aesthetic treatment content for Dr. Saloni Gupta's non-surgical offerings.
 *
 * This is a DRAFT — all clinical details require review by Dr. Gupta before
 * publishing. Text below is written in an editorial, patient-education tone
 * but must NOT be treated as verified until confirmed.
 *
 * [CLINICAL REVIEW REQUIRED] markers indicate fields needing doctor verification.
 */

export const aestheticTreatments: AestheticTreatment[] = [
  /* ───────────── FACIALS & SKIN ───────────── */

  {
    slug: "facials",
    displayTitle: "Facials & Skin Rejuvenation",
    tagline:
      "Non-invasive skin treatments for hydration, brightness, and texture.",
    summary:
      "A curated selection of facial and skin rejuvenation procedures designed to improve skin quality without surgery or significant downtime. Each treatment is tailored to your individual skin condition.",
    category: "facials",
    sections: [
      {
        heading: "What facial rejuvenation involves",
        body: `[CLINICAL REVIEW REQUIRED — replace with actual clinic approach]
          Facial rejuvenation treatments work at the skin level to improve hydration, texture, brightness, and overall quality. Unlike surgical approaches, these procedures require little to no recovery time and can be maintained over time as part of a skincare routine. Your surgeon will assess your skin condition during consultation and recommend the most appropriate treatment combination.`,
        points: [
          "[CLINICAL REVIEW REQUIRED] Personalised skin assessment before treatment",
          "[CLINICAL REVIEW REQUIRED] Combination treatments often deliver better results than single procedures",
          "[CLINICAL REVIEW REQUIRED] Results build gradually and can be maintained with repeated sessions",
        ],
      },
    ],
    indications: ["Dull or uneven skin tone", "Dehydrated skin", "Rough skin texture", "Enlarged pores", "Mild pigmentation concerns", "[CLINICAL REVIEW REQUIRED] Additional indications"],
    benefits: ["Improved skin hydration and glow", "[CLINICAL REVIEW REQUIRED] Refined skin texture", "[CLINICAL REVIEW REQUIRED] Reduced appearance of fine lines", "Minimal to no downtime", "[CLINICAL REVIEW REQUIRED] Complements other aesthetic treatments"],
    risks: ["Temporary redness or sensitivity", "[CLINICAL REVIEW REQUIRED] Add specific risks per treatment type", "[CLINICAL REVIEW REQUIRED] Not suitable for everyone — contraindications apply"],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },

  {
    slug: "hydrafacial",
    displayTitle: "Hydrafacial",
    tagline: "Deep-cleaning, hydrating, and brightening in one treatment.",
    summary:
      "Hydrafacial is a medical-grade multi-step facial treatment that cleanses, exfoliates, extracts impurities, and delivers intense hydration using specialised serums. The result is immediately smoother, more hydrated, and visibly brighter skin.",
    category: "facials",
    sections: [
      {
        heading: "How Hydrafacial works",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific protocol]
          Hydrafacial uses a patented device to perform a four-step process: cleansing and exfoliation to remove surface debris, gentle chemical exfoliation to loosen embedded impurities, painless suction-based extraction to clear congested pores, and finally the infusion of customised hydrating and nourishing serums into the skin. The entire procedure is comfortable and leaves no visible marks.`,
        points: [
          "Gentle enough for sensitive skin types",
          "[CLINICAL REVIEW REQUIRED] Customisable serum infusion based on skin concern",
          "[CLINICAL REVIEW REQUIRED] Typically performed as a single 30–45 minute session",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW REQUIRED] Congested or clogged pores",
      "[CLINICAL REVIEW REQUIRED] Uneven skin texture or tone",
      "[CLINICAL REVIEW REQUIRED] Dehydrated or dull complexion",
      "[CLINICAL REVIEW REQUIRED] Mild hyperpigmentation",
    ],
    benefits: [
      "Immediate hydration boost and healthy glow",
      "Refined pore appearance",
      "[CLINICAL REVIEW REQUIRED] Smoother skin texture",
      "[CLINICAL REVIEW REQUIRED] No downtime — return to normal activities immediately",
    ],
    risks: [
      "Temporary mild redness (resolves within hours)",
      "Temporary sensitivity to skincare products",
      "[CLINICAL REVIEW REQUIRED] Additional risks per individual case",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "Is Hydrafacial painful?",
        answer:
          "The procedure is designed to be comfortable. Most patients describe it as a gentle, cooling sensation. There is no needle injection involved, so discomfort is minimal to non-existent. [CLINICAL REVIEW REQUIRED — confirm with actual clinic experience]",
      },
    ],
    sources: [],
  },

  {
    slug: "oxygeneo",
    displayTitle: "Oxygeneo",
    tagline: "Oxygen-infused treatment for instant radiance.",
    summary:
      "Oxygeneo is a three-in-one treatment that exfoliates, infuses nutrients, and oxygenates the skin simultaneously. Known for delivering an immediate post-treatment glow with zero recovery period.",
    category: "facials",
    sections: [
      {
        heading: "The Oxygeneo process",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific protocol]
          Oxygeneo uses carbon dioxide micro-bubbles to gently exfoliate the skin's surface while simultaneously driving customised nutrient solutions deep into the tissue. The process also stimulates natural oxygenation of the skin, promoting a healthier cellular environment. The treatment is entirely non-invasive and feels warm and soothing throughout.`,
        points: [
          "[CLINICAL REVIEW REQUIRED] Three steps in one treatment: exfoliation, infusion, and oxygenation",
          "[CLINICAL REVIEW REQUIRED] Customisable crystal gel for different skin concerns",
          "[CLINICAL REVIEW REQUIRED] Popular for pre-event preparation due to instant glow effect",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW REQUIRED] Preparing for a special event",
      "[CLINICAL REVIEW_REQUIRED] Dull, tired-looking skin",
      "[CLINICAL REVIEW_REQUIRED] Dehydrated or stressed skin",
      "[CLINICAL REVIEW_REQUIRED] As a complementary treatment alongside other procedures",
    ],
    benefits: [
      "Immediate post-treatment radiance",
      "[CLINICAL REVIEW_REQUIRED] Improved product absorption",
      "[CLINICAL REVIEW_REQUIRED] Enhanced skin oxygenation",
      "[CLINICAL REVIEW_REQUIRED] Suitable for all skin types including sensitive skin",
    ],
    risks: [
      "Very low risk profile",
      "Temporary flushing or warmth",
      "[CLINICAL REVIEW_REQUIRED] Any contraindications",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },

  {
    slug: "radiance-revival",
    displayTitle: "Radiance Revival",
    tagline: "Restoring luminosity to tired or mature skin.",
    summary:
      "Radiance Revival is a targeted skin-rejuvenation treatment focused on restoring natural luminosity and vitality to skin that appears tired, aged, or damaged. [CLINICAL REVIEW REQUIRED — this is a placeholder; verify exact treatment name and modality with Dr. Gupta.]",
    category: "facials",
    sections: [
      {
        heading: "About Radiance Revival",
        body: `[CLINICAL REVIEW REQUIRED — this section describes a treatment whose exact specifications need confirmation from Dr. Gupta. Replace this text with the actual treatment description once available.]
          Radiance Revival aims to stimulate skin renewal, improve tone, and restore the kind of healthy glow associated with well-cared-for skin. The treatment approach is personalised based on your skin assessment during consultation.`,
      },
    ],
    indications: ["[CLINICAL REVIEW REQUIRED]", "[CLINICAL REVIEW REQUIRED]"],
    benefits: ["[CLINICAL REVIEW REQUIRED]", "[CLINICAL REVIEW REQUIRED]"],
    risks: ["[CLINICAL REVIEW REQUIRED]"],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },

  {
    slug: "photofacial",
    displayTitle: "Photofacial",
    tagline: "Targeted light therapy for pigmentation and sun damage.",
    summary:
      "A photofacial (also called an IPL treatment) uses targeted pulses of light to address sun damage, pigmentation irregularities, and uneven tone. The light energy is absorbed by areas of excess pigment, gradually fading discolouration while stimulating collagen production.",
    category: "facials",
    sections: [
      {
        heading: "How photofacial works",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific device details]
          Intense Pulsed Light (IPL) therapy delivers broad-spectrum light pulses that penetrate the upper layers of skin. Areas with excess melanin absorb more light energy, which breaks down pigment deposits naturally over the following weeks. Simultaneously, the light energy promotes mild collagen stimulation, contributing to improved skin texture and firmness over time.`,
        points: [
          "[CLINICAL REVIEW REQUIRED] Best for mild-to-moderate pigmentation concerns",
          "[CLINICAL REVIEW_REQUIRED] Usually requires multiple sessions for optimal results",
          "[CLINICAL REVIEW_REQUIRED] Sun protection is essential before and after treatment",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Sun-induced pigmentation or freckles",
      "[CLINICAL REVIEW_REQUIRED] Age spots or liver spots",
      "[CLINICAL REVIEW_REQUIRED] General uneven skin tone",
      "[CLINICAL REVIEW_REQUIRED] Mild facial redness or broken capillaries",
    ],
    benefits: [
      "Fading of visible pigmentation",
      "[CLINICAL REVIEW_REQUIRED] More even skin tone",
      "[CLINICAL REVIEW_REQUIRED] Improved skin texture through collagen stimulation",
    ],
    risks: [
      "Temporary darkening of pigmented areas before they fade",
      "Temporary redness or swelling",
      "[CLINICAL REVIEW_REQUIRED] Risk of post-inflammatory hyperpigmentation in darker skin tones — skin type assessment recommended",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "How many Photofacial sessions are typically needed?",
        answer:
          "[CLINICAL REVIEW REQUIRED — typical protocols range from 2–6 sessions depending on the severity of pigmentation. The exact number will be determined during your consultation based on your specific skin concerns.]",
      },
    ],
    sources: [],
  },

  {
    slug: "carbon-facial",
    displayTitle: "Carbon Facial",
    tagline: "Laser-assisted deep cleansing and pore refinement.",
    summary:
      "A Carbon Facial (sometimes called a 'Hollywood Peel') applies a thin layer of medical-grade carbon lotion to the skin, which is then activated by a laser. The carbon penetrates pores, and the laser energises it to cleanse deeply, reduce oil, and refine skin texture.",
    category: "facials",
    sections: [
      {
        heading: "The Carbon Facial process",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific device details]
          Medical-grade liquid carbon is applied evenly across the face. Once dried, a Q-switched Nd:YAG laser is passed over the skin. The carbon particles attract and absorb the laser energy, which helps break up impurities within the pores, reduces sebaceous (oil) gland activity, and stimulates the skin's natural healing response.`,
        points: [
          "[CLINICAL REVIEW_REQUIRED] Particularly beneficial for oily or acne-prone skin",
          "[CLINICAL REVIEW_REQUIRED] Minimal discomfort during treatment",
          "[CLINICAL REVIEW_REQUIRED] Often combined with other facial treatments",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Excessively oily skin",
      "[CLINICAL REVIEW_REQUIRED] Enlarged or congested pores",
      "[CLINICAL REVIEW_REQUIRED] Active or recurring acne",
      "[CLINICAL REVIEW_REQUIRED] Uneven skin texture",
    ],
    benefits: [
      "Reduced oil production",
      "[CLINICAL REVIEW_REQUIRED] Refined pore appearance",
      "[CLINICAL REVIEW_REQUIRED] Clearer, smoother skin",
    ],
    risks: [
      "Temporary warmth or tingling during treatment",
      "Possible temporary dryness or peeling",
      "[CLINICAL REVIEW_REQUIRED]",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },

  {
    slug: "chemical-peel",
    displayTitle: "Chemical Peel",
    tagline: "Controlled exfoliation for refreshed, renewed skin.",
    summary:
      "A chemical peel applies a carefully controlled solution to the skin to accelerate cellular turnover. Different strengths and formulations address various concerns — from mild surface renewal to deeper resurfacing for texture and pigmentation improvement.",
    category: "facials",
    sections: [
      {
        heading: "Understanding chemical peels",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific peel types and strengths]
          Chemical peels use acids (such as glycolic acid, salicylic acid, lactic acid, or trichloroacetic acid) applied at controlled concentrations to remove the outermost layers of damaged skin cells. This encourages new cell growth and produces a fresher, more even-toned complexion. The depth of the peel — superficial, medium, or deep — determines both the intensity of results and the recovery period required.`,
        points: [
          "[CLINICAL REVIEW_REQUIRED] Strength selected based on skin type and concern",
          "[CLINICAL REVIEW_REQUIRED] Superficial peels have minimal downtime; deeper peels require more recovery time",
          "[CLINICAL REVIEW_REQUIRED] Multiple sessions may be recommended for gradual improvement",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Uneven skin texture",
      "[CLINICAL REVIEW_REQUIRED] Hyperpigmentation or melasma",
      "[CLINICAL REVIEW_REQUIRED] Acne or acne scarring",
      "[CLINICAL REVIEW_REQUIRED] Fine lines and early signs of ageing",
      "[CLINICAL REVIEW_REQUIRED] Dull, lacklustre complexion",
    ],
    benefits: [
      "More even skin tone and texture",
      "[CLINICAL REVIEW_REQUIRED] Reduction in visible fine lines",
      "[CLINICAL REVIEW_REQUIRED] Improved product absorption post-peel",
    ],
    risks: [
      "Expected redness, peeling, and sensitivity during recovery",
      "Risk of post-inflammatory hyperpigmentation in darker skin without proper assessment",
      "[CLINICAL REVIEW_REQUIRED] Not suitable for certain skin conditions or medications",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "Will a chemical peel hurt?",
        answer:
          "Most peels cause only mild warming or tingling during application. The sensation is brief and tolerable. [CLINICAL REVIEW REQUIRED — confirm based on actual peel types offered.]",
      },
    ],
    sources: [],
  },

  {
    slug: "microdermabrasion",
    displayTitle: "Microdermabrasion",
    tagline: "Mechanical exfoliation for smoother, brighter skin.",
    summary:
      "Microdermabrasion uses a fine abrasive tip (or diamond-tipped wand) under vacuum suction to gently polish away the outermost dead skin layer, revealing smoother, more radiant skin underneath. It is a mechanical alternative to chemical peels with very short recovery time.",
    category: "facials",
    sections: [
      {
        heading: "How microdermabrasion works",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific device details]
          The device passes over the skin with controlled abrasive crystals or a diamond-tipped wand while simultaneously applying gentle suction. This physical exfoliation removes the stratum corneum (outermost dead-cell layer), stimulating faster cellular regeneration and improving blood flow to the treated area.`,
        points: [
          "[CLINICAL REVIEW_REQUIRED] Generally safe for all skin tones",
          "[CLINICAL REVIEW_REQUIRED] Quick procedure — often completed within 30 minutes",
          "[CLINICAL REVIEW_REQUIRED] Recommended as a series rather than a single treatment",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Rough or uneven skin texture",
      "[CLINICAL REVIEW_REQUIRED] Minor scarring",
      "[CLINICAL REVIEW_REQUIRED] Sun damage",
      "[CLINICAL REVIEW_REQUIRED] Enlarged pores",
      "[CLINICAL REVIEW_REQUIRED] Mild hyperpigmentation",
    ],
    benefits: [
      "Smooth, refined skin texture",
      "[CLINICAL REVIEW_REQUIRED] Brighter complexion",
      "[CLINICAL REVIEW_REQUIRED] Improved absorption of topical skincare products",
    ],
    risks: [
      "Temporary redness or mild irritation",
      "Rare: minor bruising or abrasion if pressure is excessive",
      "[CLINICAL REVIEW_REQUIRED]",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW REQUIRED]",
    longevity: "[CLINICAL REVIEW REQUIRED]",
    sessionType: "[CLINICAL REVIEW REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },

  /* ───────────── INJECTABLES & CONTOURING ───────────── */

  {
    slug: "botox",
    displayTitle: "Botox",
    tagline: "Smooth expressions, not faces. Natural-looking wrinkle reduction.",
    summary:
      "Botulinum toxin injections temporarily relax the muscles responsible for dynamic wrinkles — those lines formed by repeated facial expression. Common treatment areas include crow's feet, frown lines, forehead lines, and brow positioning.",
    category: "injectables",
    sections: [
      {
        heading: "What Botox treats",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific protocol]
          Botox (botulinum toxin type A) works by temporarily blocking the signal between the nerve and muscle, allowing overactive muscles to relax. This prevents the formation of expression lines and allows existing ones to soften over time. The product is diluted precisely and injected in tiny amounts into targeted muscle groups.`,
        points: [
          "Crow's feet — lines at the outer corners of the eyes from smiling and squinting",
          "Frown lines — vertical lines between the brows caused by皱眉 (frowning)",
          "[CLINICAL REVIEW_REQUIRED] Forehead lines (horizontal lines across the forehead)",
          "[CLINICAL REVIEW_REQUIRED] Brow lift (selective relaxation creates subtle elevation)",
          "[CLINICAL REVIEW_REQUIRED] Bunny lines, chin dimpling, and other areas as clinically indicated",
        ],
      },
      {
        heading: "The treatment process",
        body: `[CLINICAL REVIEW REQUIRED]
          During your consultation, Dr. Gupta maps the relevant muscle groups and marks precise injection sites. Tiny amounts of the diluted product are injected using a fine needle. The procedure takes approximately 10–20 minutes. Results begin appearing within 3–7 days and peak around two weeks.`,
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Dynamic wrinkles at crow's feet area",
      "[CLINICAL REVIEW_REQUIRED] Glabellar (frown) lines between eyebrows",
      "[CLINICAL REVIEW_REQUIRED] Horizontal forehead lines",
      "[CLINICAL REVIEW_REQUIRED] Mild brow descent wanting subtle elevation",
    ],
    benefits: [
      "Natural-looking reduction in expression lines",
      "[CLINICAL REVIEW_REQUIRED] Prevention of static wrinkles (lines present at rest)",
      "[CLINICAL REVIEW_REQUIRED] Non-surgical, non-downtime treatment",
    ],
    risks: [
      "Temporary bruising at injection sites",
      "Temporary headache",
      "[CLINICAL REVIEW_REQUIRED] Rare: temporary eyelid drooping (ptosis) — depends on injector skill and placement",
      "[CLINICAL REVIEW_REQUIRED] Contraindicated in pregnancy, lactation, and certain neuromuscular conditions",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW_REQUIRED]",
    longevity: "[CLINICAL REVIEW_REQUIRED]",
    sessionType: "[CLINICAL REVIEW_REQUIRED]",
    faqs: [
      {
        question: "How long does Botox last?",
        answer:
          "[CLINICAL REVIEW REQUIRED — typical duration ranges from 3–4 months, though this varies by individual metabolism, dosage, and treatment area. Maintenance sessions are recommended to sustain results.]",
      },
      {
        question: "Will Botox make my face look frozen?",
        answer:
          "When administered conservatively and correctly, Botox softens existing lines without eliminating the ability to express natural emotion. The goal is to look like yourself, just rested and refreshed. [CLINICAL REVIEW REQUIRED — confirm with actual clinic philosophy.]",
      },
    ],
    sources: [],
  },

  {
    slug: "dermal-fillers",
    displayTitle: "Dermal Fillers",
    tagline: "Restore volume, redefine contours, enhance natural features.",
    summary:
      "Dermal fillers are injectable gels (typically hyaluronic acid-based) used to restore lost volume, enhance facial contours, and smooth moderate-to-deep folds. Treatment areas include the lips, mid-face, jawline, marionette lines, and nasolabial folds.",
    category: "injectables",
    sections: [
      {
        heading: "Areas of treatment",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific filler types]
          Modern dermal fillers offer a versatile toolkit for facial enhancement when used judiciously by skilled practitioners. Hyaluronic acid fillers integrate with the body's own tissues, providing natural-feeling volume that can be adjusted and — uniquely — reversed if needed using hyaluronidase enzyme.`,
        points: [
          "Mid-face correction — restoring cheek volume and supporting the lower eye area",
          "Lip augmentation — adding volume, shape, and definition to the lips",
          "[CLINICAL REVIEW_REQUIRED] Lower-face contouring — jawline definition and chin projection",
          "[CLINICAL REVIEW_REQUIRED] Nasolabial folds and marionette lines",
          "[CLINICAL REVIEW_REQUIRED] Tear trough improvement (under-eye hollows)",
        ],
      },
      {
        heading: "Choosing the right filler",
        body: `[CLINICAL REVIEW REQUIRED]
          Different fillers have different viscosities, cross-linking levels, and intended use cases. Thinner fillers suit delicate areas like lips; thicker, more robust fillers provide structural support in the cheeks and jawline. Dr. Gupta selects the appropriate product during consultation based on anatomical assessment and desired outcome.`,
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Volume loss in mid-face or cheeks",
      "[CLINICAL REVIEW_REQUIRED] Desire for lip enhancement",
      "[CLINICAL REVIEW_REQUIRED] Jawline or chin definition",
      "[CLINICAL REVIEW_REQUIRED] Nasolabial folds",
    ],
    benefits: [
      "Restored facial volume and youthful proportions",
      "[CLINICAL REVIEW_REQUIRED] Immediate visible results",
      "[CLINICAL REVIEW_REQUIRED] Hyaluronic acid fillers are reversible",
    ],
    risks: [
      "Temporary swelling, redness, or bruising at injection sites",
      "[CLINICAL REVIEW_REQUIRED] Rare vascular complications — extremely uncommon with experienced injectors using proper technique",
      "[CLINICAL REVIEW_REQUIRED] Asymmetry during healing phase (usually resolves)",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW_REQUIRED]",
    longevity: "[CLINICAL REVIEW_REQUIRED]",
    sessionType: "[CLINICAL REVIEW_REQUIRED]",
    faqs: [
      {
        question: "Are dermal fillers safe?",
        answer:
          "When administered by trained medical professionals in a clinical setting, dermal fillers are widely regarded as safe. Hyaluronic acid fillers have decades of clinical data behind them and come with a reversal agent (hyaluronidase) as an additional safety measure. [CLINICAL REVIEW REQUIRED — expand with clinic-specific safety protocols.]",
      },
      {
        question: "How long do dermal fillers last?",
        answer:
          "[CLINICAL REVIEW REQUIRED — longevity depends on the product used, treatment area, and individual metabolism. Typically 6–18 months.]" ,
      },
    ],
    sources: [],
  },

  {
    slug: "thread-lift",
    displayTitle: "Thread Lift",
    tagline: "A non-surgical alternative for subtle facial lifting.",
    summary:
      "A thread lift uses dissolvable sutures placed beneath the skin to physically lift and reposition sagging tissue, while simultaneously stimulating the body's natural collagen production for longer-lasting structural improvement.",
    category: "injectables",
    sections: [
      {
        heading: "How a thread lift works",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific thread type and technique]
          Barbed or smooth threads are inserted beneath the skin using fine cannulas or needles. The barbs anchor into the tissue, providing an immediate lifting effect. Over the following weeks and months, the threads dissolve while stimulating new collagen formation, contributing to continued skin tightening and quality improvement beyond the initial lift.`,
        points: [
          "[CLINICAL REVIEW_REQUIRED] Minimally invasive compared to surgical facelift",
          "[CLINICAL REVIEW_REQUIRED] Suitable for mild-to-moderate skin laxity",
          "[CLINICAL REVIEW_REQUIRED] Threads used are fully dissolvable and biocompatible",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Mild-to-moderate mid-face sagging",
      "[CLINICAL REVIEW_REQUIRED] Jowling or early lower-face laxity",
      "[CLINICAL REVIEW_REQUIRED] Drooping brows or heavy eyebrow tail",
      "[CLINICAL REVIEW_REQUIRED] Patients seeking improvement without surgery",
    ],
    benefits: [
      "Visible lifting effect without general anaesthesia",
      "[CLINICAL REVIEW_REQUIRED] Collagen stimulation provides lasting quality improvement",
      "[CLINICAL REVIEW_REQUIRED] Shorter recovery than surgical alternatives",
    ],
    risks: [
      "Temporary swelling, bruising, or tenderness",
      "Visible thread ends during healing phase (usually resolve)",
      "[CLINICAL REVIEW_REQUIRED] Asymmetry during early healing",
      "[CLINICAL REVIEW_REQUIRED] Not suitable for advanced skin laxity — surgical option may be more appropriate",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW_REQUIRED]",
    longevity: "[CLINICAL REVIEW_REQUIRED]",
    sessionType: "[CLINICAL REVIEW_REQUIRED]",
    faqs: [
      {
        question: "How long do thread lift results last?",
        answer:
          "[CLINICAL REVIEW REQUIRED — typical longevity ranges from 12–24 months depending on thread type, placement, and individual collagen response.]",
      },
    ],
    sources: [],
  },

  /* ───────────── REGENERATIVE ───────────── */

  {
    slug: "regenerative",
    displayTitle: "Regenerative Facial Treatments",
    tagline: "Harness your body's own healing power for facial rejuvenation.",
    summary:
      "Regenerative treatments use components derived from your own blood or the body's natural wound-healing cascade to stimulate tissue repair, collagen production, and volumetric improvement. These procedures prioritise safety through autologous (self-derived) materials.",
    category: "regenerative",
    sections: [
      {
        heading: "The principle behind regenerative aesthetics",
        body: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific protocol]
          Regenerative aesthetics leverage the body's intrinsic healing mechanisms to improve facial appearance. By drawing on your own biological materials — such as platelet-rich plasma (PRP) derived from your blood — these treatments minimise allergy risk while stimulating natural tissue renewal processes.`,
        points: [
          "[CLINICAL REVIEW_REQUIRED] Autologous (self-derived) materials reduce allergic reaction risk",
          "[CLINICAL REVIEW_REQUIRED] Combines mechanical stimulation (microneedling/laser) with biological factors",
          "[CLINICAL REVIEW_REQUIRED] Results develop gradually over weeks to months as new tissue forms",
        ],
      },
    ],
    indications: [
      "[CLINICAL REVIEW_REQUIRED] Overall skin quality improvement",
      "[CLINICAL REVIEW_REQUIRED] Fine lines and early ageing signs",
      "[CLINICAL REVIEW_REQUIRED] Post-acne scarring or textural irregularities",
      "[CLINICAL REVIEW_REQUIRED] Dull or fatigued complexion",
    ],
    benefits: [
      "Uses your own biology — minimal allergy risk",
      "[CLINICAL REVIEW_REQUIRED] Promotes natural tissue regeneration",
      "[CLINICAL REVIEW_REQUIRED] Progressive, natural-looking improvement",
    ],
    risks: [
      "Temporary bruising, swelling, or redness",
      "[CLINICAL REVIEW_REQUIRED] Infection risk (minimised by sterile technique)",
      "[CLINICAL REVIEW_REQUIRED]",
    ],
    treatmentDuration: "[CLINICAL REVIEW REQUIRED]",
    downtime: "[CLINICAL REVIEW_REQUIRED]",
    longevity: "[CLINICAL REVIEW_REQUIRED]",
    sessionType: "[CLINICAL REVIEW_REQUIRED]",
    faqs: [
      {
        question: "[CLINICAL REVIEW REQUIRED]",
        answer: "[CLINICAL REVIEW REQUIRED]",
      },
    ],
    sources: [],
  },
];

/* ───────────── Helper functions ───────────── */

export function getAestheticTreatment(slug: string): AestheticTreatment | undefined {
  return aestheticTreatments.find((t) => t.slug === slug);
}

/** All slugs for route generation. */
export const aestheticTreatmentSlugs = aestheticTreatments.map((t) => t.slug);

/** Group treatments by category. */
export function groupByCategory(): Record<string, AestheticTreatment[]> {
  const groups: Record<string, AestheticTreatment[]> = {};
  for (const t of aestheticTreatments) {
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  }
  return groups;
}
