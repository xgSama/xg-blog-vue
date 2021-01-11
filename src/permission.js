import router from "./router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress"; // progress bar style
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.name);

  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
