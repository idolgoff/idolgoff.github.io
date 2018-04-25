/**
 * Created by dolgov.ivan@gmail.com on 23.04.2018.
 */
import * as MobileDetect from "mobile-detect";
const md = new MobileDetect(window.navigator.userAgent);
export const isMobile = md.mobile();
