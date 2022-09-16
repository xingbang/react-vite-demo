module.exports = {
  plugins: ['stylelint-less'],
  rules: {
    'selector-class-pattern': null, // 设置类名选择器不遵循 kebab-case
    'color-no-invalid-hex': true,
    'less/color-no-invalid-hex': true
  },
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    // 'stylelint-config-prettier', // 配置stylelint和prettier兼容
    'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件
  ]
}
