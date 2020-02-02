const summerCategories = ['homburg', 'bowler', 'newsboy', 'western', 'baseball', 'fedora'];
const winterCategories = ['beanie', 'watchcap', 'knit', 'ushanka'];

export const allCategories = summerCategories.concat(winterCategories);

export const mapCategories = (method, season = 'all') => {
    switch(season) {
      case 'summer':
        return summerCategories.map(category => method(category));
      case 'winter':
        return winterCategories.map(category => method(category));
      case 'all':
        return allCategories.map(category => {
          return method(category);
        });
      default:
        return allCategories.map(category => {
          return method(category);
        });
    }
}