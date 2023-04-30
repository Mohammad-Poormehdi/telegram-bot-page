import cuid from "cuid";
import { TbRobot } from "react-icons/tb";

// اطلاعات صفحه اصلی
export const mainData = {
  heading: "هدینگ",
  subtext: "توضیحات",
  botton_label: "کلیک کنید",
};
// ویژگی هایی که در صفحه ویژگی ها به نمایش در می آید
// لیست ایکون ها را میتوانید در لینک زیر مشاهده کنید
// https://react-icons.github.io/react-icons/search?q=bot
// برای استفاده از آیکون ها باید اول آنها را ایمپورت کنید لینک زیر نحوه ایمپورت کردن را توضیح داده است
// https://react-icons.github.io/react-icons
// اگر نتوانستید به هر دلیلی آیکون ایمپورت کنید اطلاع بدید تا براتون انجام بدم
// برای ساخت ویژگی جدید یک آبجت با فرمت نمونه بسازید
export const properties = [
  { id: cuid(), icon: TbRobot, title: "تایتل", description: "توضیحات" },
];
// عکس های قسمت گالری
// عکس ها را در فولدر زیر قرار دهید
// public/images
// و سپس مانند نمونه مسیر آن را قرار دهید
export const images = [
 {id:cuid(), src:'/images/placeholder.jpg'},
 {id:cuid(), src:'/images/placeholder.jpg'},
 {id:cuid(), src:'/images/placeholder.jpg'},
 {id:cuid(), src:'/images/placeholder.jpg'},
]