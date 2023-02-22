export default function ({ children }) {
    let ListHeader;

    ListHeader = (
        <article className="lg:p-4 py-2 mt-12 items-start flex justify-start">
            <div class="basis-1/6 self-center text-center"><span class="font-medium text-gray-600">Rank</span></div>
            <div class="grow self-center">
              
            </div>
            <div class="lg:basis-1/6 basis-1/4 self-center text-center">
                <span class="font-medium text-gray-600">Streak</span>
            </div>
            <div class="lg:basis-1/6 basis-1/4 self-center text-center">
                <span class="font-medium text-gray-600">Points</span>
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
