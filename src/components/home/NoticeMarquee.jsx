import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { notices } from "../../data/school";

export default function NoticeMarquee() {
  const items = notices.map((notice) => notice.title);

  return (
    <div className="relative flex w-full overflow-hidden border-y border-blue-700 bg-blue-600 text-white">
      <div className="z-10 flex shrink-0 items-center gap-2 bg-orange-500 px-4 py-3">
        <Bell className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-semibold sm:text-base">Notices</span>
      </div>
      <div className="marquee min-w-0 flex-1 py-3 text-sm font-medium sm:text-base">
        <div className="marquee-content items-center">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
          <Link
            to="/notices"
            className="underline underline-offset-4 hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View all notices
          </Link>
        </div>
        <div className="marquee-content items-center" aria-hidden="true">
          {items.map((item) => (
            <span key={`dup-${item}`}>{item}</span>
          ))}
          <span>View all notices</span>
        </div>
      </div>
    </div>
  );
}
