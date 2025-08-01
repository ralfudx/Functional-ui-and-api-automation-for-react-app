import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';
import { defineConfig } from 'cypress';
import users from './cypress/test_data/users';
import courses from './cypress/test_data/courses';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          // fullPage screenshot size is 1400x1200 on non-retina screens
          // and 2800x2400 on retina screens
          launchOptions.args.push('--window-size=1400,1200');

          // force screen to be non-retina (1400x1200 size)
          launchOptions.args.push('--force-device-scale-factor=1');
        }
        return launchOptions;
      });
      config.baseUrl = 'http://localhost:3000';

      config.env.TEST_ENV ??= 'local';

      const dataENV =
        config.env.TEST_ENV === 'local'
          ? 'local'
          : (config.env.TEST_ENV as DataENV); // still use local data for testing locally
      config.env.users = users[dataENV];
      config.env.courses = courses[dataENV];
      return config;
    },

    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 90000,
    experimentalWebKitSupport: true,
  },
});
