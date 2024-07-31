import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayOfYear from "dayjs/plugin/dayOfYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.locale("zh-cn");
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);

export { dayjs };
