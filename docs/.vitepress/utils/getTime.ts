import { dayjs } from "./dayjs";

// 获取日期时间
export const getDateTime = (time = dayjs()) => {
  let year = time.year(); // 年
  let month = time.month(); // 月
  let day = time.date(); // 日
  let hour = time.hour(); // 小时
  let minute = time.minute(); // 分钟
  let second = time.second(); // 秒
  let week = time.day(); // 星期（数字）
  let weekOfYear = time.week(); // 当前时间是年中第几周
  let dayOfYear = time.dayOfYear(); // 当前时间是年中第几天
  let startOfYear = time.startOf("year"); // 当前时间的年初时间
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    week,
    weekOfYear,
    dayOfYear,
    startOfYear,
  };
};

// 时光胶囊
export const getTimeCapsule = () => {
  const now = dayjs();
  const dayText = {
    day: "今日",
    week: "本周",
    month: "本月",
    year: "本年",
  };
  /**
   * 计算时间差的函数
   * @param {String} unit 时间单位，可以是 'day', 'week', 'month', 'year'
   */
  const getDifference = (unit) => {
    // 获取当前时间单位的开始时间
    const start = now.startOf(unit);
    // 获取当前时间单位的结束时间
    const end = now.endOf(unit);
    // 计算总的天数或小时数
    // start:1; end:5
    const total = end.diff(start, unit === "day" ? "hour" : "day") + 1;
    // 计算已经过去的天数或小时数
    let passed;
    if (unit === "week" && now.day() === 0) {
      // 如果是星期日
      passed = total - 1;
    } else {
      passed = now.diff(start, unit === "day" ? "hour" : "day");
    }
    const remaining = total - passed;
    const percentage = (passed / total) * 100;
    // 返回数据
    return {
      name: dayText[unit],
      total: total,
      passed: passed,
      remaining: remaining,
      percentage: percentage.toFixed(2),
    };
  };
  return {
    day: getDifference("day"),
    week: getDifference("week"),
    month: getDifference("month"),
    year: getDifference("year"),
  };
};

export const getHello = () => {
  const { hour } = getDateTime();
  let hello;
  if (hour < 6) {
    hello = "凌晨好，昨晚睡得怎么样？";
  } else if (hour < 9) {
    hello = "早上好，今天也要开心哦！";
  } else if (hour < 12) {
    hello = "上午好，今天也要加油哦！";
  } else if (hour < 14) {
    hello = "中午好，吃饱了精神好！";
  } else if (hour < 17) {
    hello = "下午好，继续加油！";
  } else if (hour < 19) {
    hello = "傍晚好，是时候放松一下了！";
  } else if (hour < 22) {
    hello = "晚上好，是时候休息了！";
  } else {
    hello = "夜深了，明天继续加油！";
  }
  return hello;
};

// 建站日期统计
export const siteDateStatistics = (siteStartDate) => {
  return dayjs().diff(siteStartDate, "day");
};
