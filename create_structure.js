const fs = require('fs');
const path = require('path');

const base = 'business-empire-russia';

const dirs = [
'client/public',
'client/src',
'client/src/app',
'client/src/pages',
'client/src/components',
'client/src/components/map',
'client/src/components/business',
'client/src/components/minigames',
'client/src/components/ui',
'client/src/components/daily',
'client/src/hooks',
'client/src/services',
'client/src/store',
'client/src/store/slices',
'client/src/types',
'client/src/utils',
'client/src/constants',
'server/src',
'server/src/modules',
'server/src/modules/auth',
'server/src/modules/users',
'server/src/modules/users/entities',
'server/src/modules/cities',
'server/src/modules/cities/entities',
'server/src/modules/businesses',
'server/src/modules/businesses/entities',
'server/src/modules/properties',
'server/src/modules/properties/entities',
'server/src/modules/jobs',
'server/src/modules/jobs/entities',
'server/src/modules/income',
'server/src/modules/leaderboard',
'server/src/modules/daily',
'server/src/common',
'server/src/common/guards',
'server/src/common/interceptors',
'server/src/common/decorators',
'server/src/common/utils',
'server/src/config',
'bot/src',
'bot/src/commands',
'shared'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(base, dir), {recursive: true});
});

const tsContent = (name) => `// ${name}
export {};
`;

const files = {
'client/public/index.html': `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Project</title>
</head>
<body>
</body>
</html>`,
'client/src/app/App.tsx': tsContent('App.tsx'),
'client/src/app/Router.tsx': tsContent('Router.tsx'),
'client/src/app/store.ts': tsContent('store.ts'),
'client/src/pages/MapPage.tsx': tsContent('MapPage.tsx'),
'client/src/pages/CityPage.tsx': tsContent('CityPage.tsx'),
'client/src/pages/BusinessPage.tsx': tsContent('BusinessPage.tsx'),
'client/src/pages/PropertyPage.tsx': tsContent('PropertyPage.tsx'),
'client/src/pages/JobsPage.tsx': tsContent('JobsPage.tsx'),
'client/src/pages/ProfilePage.tsx': tsContent('ProfilePage.tsx'),
'client/src/pages/LeaderboardPage.tsx': tsContent('LeaderboardPage.tsx'),
'client/src/components/map/RussiaMap.tsx': tsContent('RussiaMap.tsx'),
'client/src/components/map/CityMarker.tsx': tsContent('CityMarker.tsx'),
'client/src/components/map/MapControls.tsx': tsContent('MapControls.tsx'),
'client/src/components/business/BusinessCard.tsx': tsContent('BusinessCard.tsx'),
'client/src/components/business/UpgradeModal.tsx': tsContent('UpgradeModal.tsx'),
'client/src/components/business/IncomeTimer.tsx': tsContent('IncomeTimer.tsx'),
'client/src/components/minigames/PuzzleGame.tsx': tsContent('PuzzleGame.tsx'),
'client/src/components/minigames/ReactionGame.tsx': tsContent('ReactionGame.tsx'),
'client/src/components/minigames/LogicGame.tsx': tsContent('LogicGame.tsx'),
'client/src/components/ui/TopBar.tsx': tsContent('TopBar.tsx'),
'client/src/components/ui/BottomNav.tsx': tsContent('BottomNav.tsx'),
'client/src/components/ui/Modal.tsx': tsContent('Modal.tsx'),
'client/src/components/ui/ProgressBar.tsx': tsContent('ProgressBar.tsx'),
'client/src/components/ui/CoinCounter.tsx': tsContent('CoinCounter.tsx'),
'client/src/components/daily/DailyReward.tsx': tsContent('DailyReward.tsx'),
'client/src/components/daily/StreakDisplay.tsx': tsContent('StreakDisplay.tsx'),
'client/src/hooks/useTelegram.ts': tsContent('useTelegram.ts'),
'client/src/hooks/usePassiveIncome.ts': tsContent('usePassiveIncome.ts'),
'client/src/hooks/useGameState.ts': tsContent('useGameState.ts'),
'client/src/hooks/useAntiCheat.ts': tsContent('useAntiCheat.ts'),
'client/src/services/api.ts': tsContent('api.ts'),
'client/src/services/telegram.ts': tsContent('telegram.ts'),
'client/src/services/mapService.ts': tsContent('mapService.ts'),
'client/src/store/slices/userSlice.ts': tsContent('userSlice.ts'),
'client/src/store/slices/citySlice.ts': tsContent('citySlice.ts'),
'client/src/store/slices/businessSlice.ts': tsContent('businessSlice.ts'),
'client/src/store/slices/propertySlice.ts': tsContent('propertySlice.ts'),
'client/src/store/slices/jobSlice.ts': tsContent('jobSlice.ts'),
'client/src/store/index.ts': tsContent('index.ts'),
'client/src/types/index.ts': tsContent('index.ts'),
'client/src/utils/economy.ts': tsContent('economy.ts'),
'client/src/utils/levels.ts': tsContent('levels.ts'),
'client/src/utils/formatters.ts': tsContent('formatters.ts'),
'client/src/constants/cities.ts': tsContent('cities.ts'),
'client/src/constants/businesses.ts': tsContent('businesses.ts'),
'client/src/constants/properties.ts': tsContent('properties.ts'),
'client/src/constants/jobs.ts': tsContent('jobs.ts'),
'client/package.json': '{}',
'client/vite.config.ts': tsContent('vite.config.ts'),
'client/tsconfig.json': '{}',
'server/src/main.ts': tsContent('main.ts'),
'server/src/app.module.ts': tsContent('app.module.ts'),
'server/src/modules/auth/auth.module.ts': tsContent('auth.module.ts'),
'server/src/modules/auth/auth.controller.ts': tsContent('auth.controller.ts'),
'server/src/modules/auth/auth.service.ts': tsContent('auth.service.ts'),
'server/src/modules/auth/telegram.guard.ts': tsContent('telegram.guard.ts'),
'server/src/modules/auth/jwt.strategy.ts': tsContent('jwt.strategy.ts'),
'server/src/modules/users/users.module.ts': tsContent('users.module.ts'),
'server/src/modules/users/users.controller.ts': tsContent('users.controller.ts'),
'server/src/modules/users/users.service.ts': tsContent('users.service.ts'),
'server/src/modules/users/entities/user.entity.ts': tsContent('user.entity.ts'),
'server/src/modules/cities/cities.module.ts': tsContent('cities.module.ts'),
'server/src/modules/cities/cities.controller.ts': tsContent('cities.controller.ts'),
'server/src/modules/cities/cities.service.ts': tsContent('cities.service.ts'),
'server/src/modules/cities/entities/city.entity.ts': tsContent('city.entity.ts'),
'server/src/modules/businesses/businesses.module.ts': tsContent('businesses.module.ts'),
'server/src/modules/businesses/businesses.controller.ts': tsContent('businesses.controller.ts'),
'server/src/modules/businesses/businesses.service.ts': tsContent('businesses.service.ts'),
'server/src/modules/businesses/entities/business-template.entity.ts': tsContent('business-template.entity.ts'),
'server/src/modules/businesses/entities/user-business.entity.ts': tsContent('user-business.entity.ts'),
'server/src/modules/properties/properties.module.ts': tsContent('properties.module.ts'),
'server/src/modules/properties/properties.controller.ts': tsContent('properties.controller.ts'),
'server/src/modules/properties/properties.service.ts': tsContent('properties.service.ts'),
'server/src/modules/properties/entities/property-template.entity.ts': tsContent('property-template.entity.ts'),
'server/src/modules/properties/entities/user-property.entity.ts': tsContent('user-property.entity.ts'),
'server/src/modules/jobs/jobs.module.ts': tsContent('jobs.module.ts'),
'server/src/modules/jobs/jobs.controller.ts': tsContent('jobs.controller.ts'),
'server/src/modules/jobs/jobs.service.ts': tsContent('jobs.service.ts'),
'server/src/modules/jobs/entities/job.entity.ts': tsContent('job.entity.ts'),
'server/src/modules/income/income.module.ts': tsContent('income.module.ts'),
'server/src/modules/income/income.service.ts': tsContent('income.service.ts'),
'server/src/modules/income/income.scheduler.ts': tsContent('income.scheduler.ts'),
'server/src/modules/leaderboard/leaderboard.module.ts': tsContent('leaderboard.module.ts'),
'server/src/modules/leaderboard/leaderboard.controller.ts': tsContent('leaderboard.controller.ts'),
'server/src/modules/leaderboard/leaderboard.service.ts': tsContent('leaderboard.service.ts'),
'server/src/modules/daily/daily.module.ts': tsContent('daily.module.ts'),
'server/src/modules/daily/daily.controller.ts': tsContent('daily.controller.ts'),
'server/src/modules/daily/daily.service.ts': tsContent('daily.service.ts'),
'server/src/common/guards/anti-cheat.guard.ts': tsContent('anti-cheat.guard.ts'),
'server/src/common/interceptors/rate-limit.interceptor.ts': tsContent('rate-limit.interceptor.ts'),
'server/src/common/decorators/current-user.decorator.ts': tsContent('current-user.decorator.ts'),
'server/src/common/utils/economy.util.ts': tsContent('economy.util.ts'),
'server/src/common/utils/validation.util.ts': tsContent('validation.util.ts'),
'server/src/config/database.config.ts': tsContent('database.config.ts'),
'server/src/config/game.config.ts': tsContent('game.config.ts'),
'server/package.json': '{}',
'server/tsconfig.json': '{}',
'bot/src/bot.ts': tsContent('bot.ts'),
'bot/src/commands/start.ts': tsContent('start.ts'),
'bot/package.json': '{}',
'shared/types.ts': tsContent('types.ts'),
'shared/constants.ts': tsContent('constants.ts'),
'docker-compose.yml': '',
'.env.example': '',
'README.md': ''
};

Object.entries(files).forEach(([file, content]) => {
  try {
    fs.writeFileSync(path.join(base, file), content);
    console.log(`Created: ${file}`);
  } catch (e) {
    console.log(`Error writing ${file}: ${e.message}`);
  }
});

console.log('Structure created');