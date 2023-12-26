/** @type {import('stylelint').Config} */
export default {
  rules: {
    fix: true,
    cache: true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "no-descending-specificity": true,
    ignore: [selectors - within - list],
    /* Disallow duplicate custom properties within declaration blocks. */
    "declaration-block-no-duplicate-custom-properties": true,

    /* Disallow duplicate properties within declaration blocks. */
    "declaration-block-no-duplicate-properties": true,

    /* Disallow duplicate names within font families. */
    "font-family-no-duplicate-names": true,

    /* Disallow duplicate selectors within keyframe blocks. */
    "keyframe-block-no-duplicate-selectors": true,

    /* Disallow duplicate @import rules. */
    "no-duplicate-at-import-rules": true,

    /* Disallow duplicate selectors. */
    "no-duplicate-selectors": true,

    /* Disallow empty things with these no-empty rules. */
    /* Disallow empty blocks. */
    "block-no-empty": true,

    /* Disallow empty comments. */
    "comment-no-empty": true,

    /* Disallow empty sources. */
    "no-empty-source": true,

    /* Disallow invalid hex colors. */
    "color-no-invalid-hex": true,

    /* Disallow invalid unspaced operator within calc functions. */
    "function-calc-no-unspaced-operator": true,

    /* Disallow invalid !important within keyframe declarations. */
    "keyframe-declaration-no-important": true,

    /* Disallow invalid media queries. */
    "media-query-no-invalid": true,

    /* Disallow invalid named grid areas. */
    "named-grid-areas-no-invalid": true,

    /* Disallow invalid double-slash comments. */
    "no-invalid-double-slash-comments": true,

    /* Disallow invalid position @import rules. */
    "no-invalid-position-at-import-rule": true,

    /* Disallow invalid newlines within strings. */
    "string-no-newline": true,

    /* Disallow irregular whitespace. */
    "no-irregular-whitespace": true,

    /* Disallow missing var function for custom properties. */
    "custom-property-no-missing-var-function": true,

    /* Disallow a missing generic family keyword within font families. */
    "font-family-no-missing-generic-family-keyword": true,

    /* Disallow non-standard direction values for linear gradient functions. */
    "function-linear-gradient-no-nonstandard-direction": true,

    /* Disallow shorthand properties that override related longhand properties. */
    "declaration-block-no-shorthand-property-overrides": true,

    /* Disallow unmatchable An+B selectors. */
    "selector-anb-no-unmatchable": true,

    /* Disallow unknown annotations. */
    "annotation-no-unknown": true,

    /* Disallow unknown at-rules. */
    "at-rule-no-unknown": true,

    /* Disallow unknown values for properties within declarations. */
    "declaration-property-value-no-unknown": true,

    /* Disallow unknown functions. */
    "function-no-unknown": true,

    /* Disallow unknown media feature names. */
    "media-feature-name-no-unknown": true,

    /* Disallow unknown values for media features. */
    "media-feature-name-value-no-unknown": true,

    /* Disallow unknown animations. */
    "no-unknown-animations": true,

    /* Disallow unknown custom properties. */
    "no-unknown-custom-properties": true,

    /* Disallow unknown properties. */
    "property-no-unknown": true,

    /* Disallow unknown pseudo-class selectors. */
    "selector-pseudo-class-no-unknown": true,

    /* Disallow unknown pseudo-element selectors. */
    "selector-pseudo-element-no-unknown": true,

    /* Disallow unknown type selectors. */
    "selector-type-no-unknown": true,

    /* Disallow unknown units. */
    "unit-no-unknown": true,

    /* Allow, disallow or require these lists*/
    "at-rule-no-vendor-prefix": true,

    /*Disallow duplicate custom properties within declaration blocks.*/
    "declaration-block-no-duplicate-custom-properties": true,

    // Disallow duplicate properties within declaration blocks.
    "declaration-block-no-duplicate-properties": true,

    // Disallow duplicate names within font families.
    "font-family-no-duplicate-names": true,

    // Disallow duplicate selectors within keyframe blocks.	✅
    "keyframe-block-no-duplicate-selectors": true,

    // Disallow duplicate @import rules.	✅
    "no-duplicate-at-import-rules": true,

    // Disallow duplicate selectors.	✅
    "no-duplicate-selectors": true,

    // Disallow empty blocks.	✅
    "block-no-empty": true,

    // Disallow empty comments.	✅
    "comment-no-empty": true,

    // Disallow empty sources.	✅
    "no-empty-source": true,

    // Disallow invalid hex colors.	✅
    "color-no-invalid-hex": true,

    // Disallow invalid unspaced operator within calc functions.	✅
    "function-calc-no-unspaced-operator": true,
    // Disallow invalid unspaced operator within calc functions.
    "keyframe-declaration-no-important": true,
    // Disallow invalid !important within keyframe declarations.	✅
    "media-query-no-invalid": true,
    // Disallow invalid media queries.	✅
    "named-grid-areas-no-invalid": true,
    //Disallow invalid named grid areas.	✅
    "no-invalid-double-slash-comments": true,
    //Disallow invalid double-slash comments.	✅
    "no-invalid-position-at-import-rule": true,
    //Disallow invalid position @import rules.	✅
    "string-no-newline": true,
    //Disallow invalid newlines within strings.	✅

    "no-irregular-whitespace": true,
    //Disallow irregular whitespace.	✅

    //Disallow missing things with these no-missing rules.
    "custom-property-no-missing-var-function": true,
    //Disallow missing var function for custom properties.	✅
    "font-family-no-missing-generic-family-keyword": true,
    //Disallow a missing generic family keyword within font families.	✅

    //Disallow non-standard things with these no-nonstandard rules.
    "function-linear-gradient-no-nonstandard-direction": true,
    //Disallow non-standard direction values for linear gradient functions.	✅

    //Disallow overrides with these no-overrides rules.
    "declaration-block-no-shorthand-property-overrides": true,
    //Disallow shorthand properties that override related longhand properties.	✅

    //Disallow unmatchable things with these no-unmatchable rules.
    "selector-anb-no-unmatchable": true,
    //Disallow unmatchable An+B selectors.	✅

    //Disallow unknown things with these no-unknown rules.
    "annotation-no-unknown": true,
    //Disallow unknown annotations.	✅
    "at-rule-no-unknown": true,
    //Disallow unknown at-rules.	✅
    "declaration-property-value-no-unknown": true,
    //Disallow unknown values for properties within declarations.
    "function-no-unknown": true,
    //Disallow unknown functions.	✅
    "media-feature-name-no-unknown": true,
    //Disallow unknown media feature names.	✅
    "media-feature-name-value-no-unknown": true,
    //Disallow unknown values for media features.
    "no-unknown-animations": true,
    //Disallow unknown animations.
    "no-unknown-custom-properties": true,
    //Disallow unknown custom properties.
    "property-no-unknown": true,
    //Disallow unknown properties.	✅
    "selector-pseudo-class-no-unknown": true,
    //Disallow unknown pseudo-class selectors.	✅
    "selector-pseudo-element-no-unknown": true,
    //Disallow unknown pseudo-element selectors.	✅
    "selector-type-no-unknown": true,
    //Disallow unknown type selectors.	✅
    "unit-no-unknown": true,
    //Disallow unknown units.	✅

    "comment-word-disallowed-list": ["/^TODO:/", "badword"],
    // Specify a list of disallowed words within comments.
    "function-disallowed-list": true,
    // Specify a list of disallowed functions.
    "function-url-no-scheme-relative": true,
    // Disallow scheme-relative URLs.
    "function-url-scheme-allowed-list": ["data", "https"],
    // Specify a list of allowed URL schemes.
    "function-url-scheme-disallowed-list": ["ftp", "/^http/"],
    // Specify a list of disallowed URL schemes.

    "length-zero-no-unit": true,
    // Disallow units for zero lengths.

    "selector-no-vendor-prefix": true,
    // Disallow vendor prefixes for selectors.
    "value-no-vendor-prefix": true,
    //Disallow vendor prefixes for values.

    //Specify lowercase or uppercase for words with these case rules.
    "function-name-case": "lower",
    //Specify lowercase or uppercase for function names.
    "selector-type-case": "lower",
    //Specify lowercase or uppercase for type selectors.
    "value-keyword-case": "lower",
    //Specify lowercase or uppercase for keywords values.

    //Enforce or disallow empty lines before constructs with these empty-line-before rules.
    "at-rule-empty-line-before": "never",
    //Require or disallow an empty line before at-rules.
    "comment-empty-line-before": "never",
    //Require or disallow an empty line before comments.
    "custom-property-empty-line-before": "never",
    //Require or disallow an empty line before custom properties.
    "declaration-empty-line-before": "never",
    //Require or disallow an empty line before declarations.
    "rule-empty-line-before": "never",
    //Require or disallow an empty line before rules.

    // Apply limits with these max and min rules.
    "declaration-block-single-line-max-declarations": 2,
    // Limit the number of declarations within a single-line declaration block.
    "declaration-property-max-values": 2,
    // Limit the number of values for a list of properties within declarations.
    //Limitthe depth of nesting.

    "max-nesting-depth": 2,

    "number-max-precision": 2,
    //Limitthe number of decimal places allowed in numbers.
    "selector-max-attribute": 2,
    //Limitthe number of attribute selectors in a selector.
    "selector-max-class": 2,
    //Limitthe number of classes in a selector.
    "selector-max-combinators": 2,
    //Limitthe number of combinators in a selector.
    "selector-max-compound-selectors": 1,
    //Limitthe number of compound selectors in a selector.
    "selector-max-id": 1,
    //Limitthe number of ID selectors in a selector.
    "selector-max-pseudo-class": 1,
    //Limitthe number of pseudo-classes in a selector.
    "selector-max-specificity": 2,
    //Limitthe specificity of selectors.
    "selector-max-type": 2,
    //Limitthe number of type selectors in a selector.
    "selector-max-universal": 2,
    //Limitthe number of universal selectors in a selector.
    "time-min-milliseconds": 100,
    //Limitthe minimum number of milliseconds for time values.
    "alpha-value-notation": "percentage",
    //Specify percentage or number notation for alpha-values.
    "color-function-notation": "modern",
    //Specify modern or legacy notation for color-functions.
    "color-hex-length": "short",
    //Specify short or long notation for hex colors.
    "font-weight-notation": "numeric",
    //Specify numeric or named notation for font weights.		🔧
    "hue-degree-notation": "angle",
    //Specify number or angle notation for degree hues.
    "import-notation": "string",
    //Specify string or URL notation for @import rules.
    "keyframe-selector-notation": "percentage",
    //Specify keyword or percentage notation for keyframe selectors.
    "lightness-notation": "percentage",
    //Specify number or percentage notation for lightness.
    "media-feature-range-notation": "prefix",
    //Specify context or prefix notation for media feature ranges.
    "selector-not-notation": "complex",
    //Specify simple or complex notation for ":not() pseudo-class selectors.
    "selector-pseudo-element-colon-notation": "double",
    //Specify single or double colon notation for applicable pseudo-element selectors.

    //Specify a pattern for comments.
    "custom-media-pattern": "foo-.+",
    //Specify a pattern for custom media query names.
    "custom-property-pattern": "foo-.+",
    //Specify a pattern for custom properties.
    "keyframes-name-pattern": "foo-.+",
    //Specify a pattern for keyframe names.
    "selector-nested-pattern": regex | string,
    //Specify a pattern for the selectors of rules nested within rules

    "selector-attribute-quotes": true,
    // Require or disallow quotes for attribute values.

    "declaration-block-no-redundant-longhand-properties": true,
    //Disallow redundant longhand properties within declaration-block.

    "shorthand-property-no-redundant-values": true,
    //Disallow redundant values within shorthand properties.
    //Whitespace inside

    //Require or disallow whitespace on the inside with this whitespace-inside rule.
    "comment-whitespace-inside": "always",
    //Require or disallow whitespace on the inside of comment markers.

    "at-rule-property-required-list": {
      "at-rule-name": ["array", "of", "properties"] | "property",
    },
    //Specify a list of required properties for an at-rule.

    //Specify a list of disallowed words within comments.
    "comment-whitespace-inside": "always",

    /* Declaration */
    "declaration-empty-line-before": "never",

    "declaration-property-value-no-unknown": true,

    "function-url-no-scheme-relative": true,
    //Disallow scheme-relative URLs.

    "function-url-scheme-allowed-list": array | string | regex,
    //Specify a list of allowed URL schemes.

    "function-url-scheme-disallowed-list": array | string | regex,
    //Specify a list of disallowed URL schemes.

    /* Length */
    "hue-degree-notation": "number",

    "length-zero-no-unit": true,
    //Disallow units for zero lengths.	✅
    "import-notation": "string",

    "media-feature-name-no-vendor-prefix": true,
    //Disallow vendor prefixes for media feature names.	✅
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-selector-notation": "percentage",
    "keyframe-declaration-no-important": true,

    "property-disallowed-list": [
      "always",
      {
        except: [
          "after-rule",
          "after-single-line-comment",
          "inside-block-and-after-rule",
          "inside-block",
          "first-nested",
        ],
      },
    ],
    // Specify a list of disallowed properties.

    "property-no-vendor-prefix": true,
    // Disallow vendor prefixes for properties.	✅

    "rule-empty-line-before": "never",
    // Require or disallow an empty line before rules.

    "rule-selector-property-disallowed-list": {
      selector:
        ["array", "of", "properties", "/regex/", /regex/] |
        "property" |
        "/regex/" |
        /regex/,
      // Specify a list of disallowed properties for selectors within rules.

      "selector-attribute-name-disallowed-list": ["class", "id", "/^data-/"],
      // Specify a list of disallowed attribute names.

      "selector-attribute-operator-allowed-list": ["=", "|="],
      // Specify a list of allowed attribute operators.

      "selector-attribute-operator-disallowed-list": ["*="],
      // Specify a list of disallowed attribute operators.

      "selector-combinator-allowed-list": [">", " "],
      // Specify a list of allowed combinators.

      "value-no-vendor-prefix": true,
      // Disallow vendor prefixes for values.

      "at-rule-empty-line-before": "never",
      // Require an empty line before at-rules.

      "comment-empty-line-before": "never",
      // Require an empty line before comments.

      "custom-property-empty-line-before": "never",
      // Require an empty line before custom properties.

      "declaration-empty-line-before": "never",
      // Require an empty line before declarations.

      "rule-empty-line-before": [
        "always",
        {
          except: [
            "after-rule",
            "after-single-line-comment",
            "inside-block-and-after-rule",
            "inside-block",
            "first-nested",
          ],
        },
      ],
      // Require an empty line before rules.

      "declaration-block-single-line-max-declarations": 2,
      // Limit the number of declarations within a single-line declaration block.

      "declaration-property-max-values": {
        border: 3,
        "/^margin/": 3,
      },
      // Limit the number of values for a list of properties within declarations.

      "max-nesting-depth": 2,
      // Limit the depth of nesting.

      "number-max-precision": 2,
      // Limit the number of decimal places allowed in numbers.

      "selector-max-attribute": 1,
      // Limit the number of attribute selectors in a selector.

      "selector-max-class": 1,
      // Limit the number of classes in a selector.

      "selector-max-combinators": 1,
      // Limit the number of combinators in a selector.

      "selector-max-compound-selectors": 1,
      // Limit the number of compound selectors in a selector.

      "selector-max-id": 1,
      // Limit the number of ID selectors in a selector.

      "selector-max-pseudo-class": 1,
      // Limit the number of pseudo-classes in a selector.

      "selector-max-specificity": "id,class,type",
      // Limit the specificity of selectors.

      "selector-max-type": 3,
      // Limit the number of type selectors in a selector.

      "selector-max-universal": 2,
      // Limit the number of universal selectors in a selector.

      "time-min-milliseconds": 100,
      // Limit the minimum number of milliseconds for time values.

      "alpha-value-notation": "percentage",
      // Specify percentage notation for alpha-values.

      "color-function-notation": "modern",
      // Specify modern notation for color-functions.

      "color-hex-length": "short",
      // Specify short notation for hex colors.

      "font-weight-notation": "number",
      // Specify numeric notation for font weights.

      "hue-degree-notation": "number",
      // Specify number notation for degree hues.

      "import-notation": "string",
      // Specify string notation for @import rules.

      "keyframe-selector-notation": "percentage",
      // Specify percentage notation for keyframe selectors.

      "lightness-notation": "percentage",
      // Specify percentage notation for lightness.

      "media-feature-range-notation": "prefix",
      // Specify prefix notation for media feature ranges.

      "selector-not-notation": "complex",
      // Specify complex notation for ":not() pseudo-class selectors.

      "selector-pseudo-element-colon-notation": "double",
      // Specify double colon notation for applicable pseudo-element selectors.

      "font-family-name-quotes": "always",
      // Require quotes for font family names.

      "function-url-quotes": "always",
      // Require quotes for URLs

      "selector-attribute-quotes": "always",
      // Require or disallow quotes for attribute values.

      "declaration-block-no-redundant-longhand-properties": true,
      // Disallow redundant longhand properties within declaration-block.

      "shorthand-property-no-redundant-values": true,
      // Disallow redundant values within shorthand properties.

      "comment-whitespace-inside": "always",
      // Require or disallow whitespace on the inside of comment markers.
    },
  },
};
