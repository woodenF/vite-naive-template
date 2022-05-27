module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  safelist: [
    'from-[#ec4786]',
    'to-[#b955a4]',
    'from-[#865ec0]',
    'to-[#5144b4]',
    'from-[#56cdf3]',
    'to-[#719de3]',
    'from-[#fcbc25]',
    'to-[#f68057]'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-color-hover)',
        'primary-pressed': 'var(--primary-color-pressed)',
        'primary-active': 'var(--primary-color-active)',
        info: 'var(--info-color)',
        'info-hover': 'var(--info-color-hover)',
        'info-pressed': 'var(--info-color-pressed)',
        'info-active': 'var(--info-color-active)',
        success: 'var(--success-color)',
        'success-hover': 'var(--success-color-hover)',
        'success-pressed': 'var(--success-color-pressed)',
        'success-active': 'var(--success-color-active)',
        warning: 'var(--warning-color)',
        'warning-hover': 'var(--warning-color-hover)',
        'warning-pressed': 'var(--warning-color-pressed)',
        'warning-active': 'var(--warning-color-active)',
        error: 'var(--error-color)',
        'error-hover': 'var(--error-color-hover)',
        'error-pressed': 'var(--error-color-pressed)',
        'error-active': 'var(--error-color-active)'
      },
      spacing: {
        mini: '8px',
        small: '12px',
        normal: '16px',
        medium: '20px',
        large: '24px',
        // 展开状态下的 sidebar 宽度
        sidebar: '220px',
        // 折叠状态下的 sidebar 宽度
        'sidebar--collapsed': '56px',
        // header 高度
        header: '48px',
        // tab 高度
        tab: '44px',
        // 内容区域距顶部的高度 header + tab
        content: '92px'
      },
      fontSize: {
        mini: ['12px', '18px'],
        small: ['14px', '20px'],
        normal: ['16px', '24px'],
        medium: ['24px', '32px'],
        large: ['28px', '36px']
      },
      borderRadius: {
        mini: '8px',
        small: '12px',
        normal: '16px',
        medium: '20px',
        large: '24px'
      }
    }
  },
  plugins: []
};
