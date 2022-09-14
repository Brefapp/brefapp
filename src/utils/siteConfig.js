const config = require(`../../.ghost.json`).production;
module.exports = {
    siteUrl:
        process.env.NODE_ENV === `production`
            ? process.env.SITE_URL || config.siteUrl || `https://brefapp.com`
            : `https://www.brefapp.com`, // Site domain. Do not include a trailing slash!

    postsPerPage: 34, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    siteTitleMeta: `Brefapp`, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `Résumés de livres pour les curieux qui aiment apprendre, les gens occupés qui n'ont pas le temps de lire.`, // This allows an alternative site description for meta data for pages.

    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image

    shortTitle: `Brefapp`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#f0a794`, // Used for Offline Manifest
};
