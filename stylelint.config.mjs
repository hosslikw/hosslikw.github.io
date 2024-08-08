// stylelint.config.mjs
export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-html'
  ],

  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-plugin-defensive-css'
  ],

  rules: {
    'annotation-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'debug',
        'import',
        'media',
        'use',
        'while'
      ]
    }],

    'block-no-empty': true,
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'color-named': [
      'never',
      {
        ignore: ['inside-function']
      }
    ],
    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-disallowed-list': ['/^TODO:/'],
    'custom-media-pattern': null,
    'custom-property-empty-line-before': 'never',
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': null,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-empty-line-before': 'never',
    'declaration-property-unit-disallowed-list': [
      {
        'font-size': ['px']
      }
    ],
    'declaration-property-value-no-unknown': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-disallowed-list': null,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-no-unknown': true,
    'function-url-no-scheme-relative': null,
    'function-url-quotes': 'always',
    'function-url-scheme-allowed-list': ['data', 'https'],
    'function-url-scheme-disallowed-list': ['ftp', 'http'],
    'hue-degree-notation': 'angle',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': 'percentage',
    'keyframes-name-pattern': null,
    'length-zero-no-unit': true,
    'lightness-notation': 'percentage',
    'max-nesting-depth': 2,
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-no-unknown': true,
    'media-feature-range-notation': 'prefix',
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'no-unknown-animations': true,
    'no-unknown-custom-properties': null,
    'number-max-precision': 5,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/use-defensive-css': {
      'accidental-hover': true,
      'background-repeat': true,
      'custom-property-fallbacks': true,
      'flex-wrapping': true,
      'scroll-chaining': true,
      'scrollbar-gutter': true,
      'vendor-prefix-grouping': true
    },
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': 'always',
    'selector-anb-no-unmatchable': true,
    'selector-attribute-quotes': 'always',
    'selector-id-pattern': null,
    'selector-max-id': 1,
    'selector-max-specificity': '1,5,12',
    'selector-max-universal': 3,
    'selector-nested-pattern': null,
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'time-min-milliseconds': 100,
    'unit-no-unknown': true,
    // 'unit-disallowed-list': "px",
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box', 'inline-box']
      }
    ]
  },
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html'
    }]
}
