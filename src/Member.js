export default function Member({ children }) {
    let ListHeader;

    ListHeader = (
        <article className="lg:p-4 py-2 mt-12 items-start flex justify-start">
            <div className="basis-1/6 self-center text-center"><span className="font-medium text-gray-600">Rank</span></div>
            <div className="basis-full grow self-center">
              
            </div>
            <div className="lg:basis-1/6 basis-1/5 self-center text-center">
                <span className="font-medium text-gray-600">Streak</span>
            </div>
            <div className="lg:basis-1/6 basis-1/5 self-center text-center">
                <span className="font-medium text-gray-600">Points</span>
            </div>
        </article>
    )

    return ([
        ListHeader,
        <ul className="divide-y divide-slate-100">
            {children}
        </ul>
    ])
}
