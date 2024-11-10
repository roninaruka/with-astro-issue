/**
 * @type {import("astro").MiddlewareHandler}
 */

// `context` and `next` are automatically typed
export const onRequest = async (context, next) => {
    if (context.url.pathname.includes("/reset-page/")) {
        return context.redirect(
            `/reset-page?token=${context?.url?.pathname?.substring("/reset-page/".length)}`,
        );
    }

    return next();
};
