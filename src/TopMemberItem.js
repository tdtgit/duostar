export default function ({ member }) {
    let FirstAvatar = member.avatar.replace("xlarge", "xxlarge");
    let memberContent;

    if (member.rank == 1) {
        memberContent = (
            <div className="basis-1/2">
                <div class="relative mb-8">
                    <div class="w-full">
                        <img class="rounded-full mx-auto mb-3 w-10/12 border-8 border-emerald-500 p-1" src={FirstAvatar} />
                    </div>
                    <div class="absolute bottom-0 w-full">
                        {/* <span class="bg-yellow-500">#{member.rank}</span> */}
                        <img src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/cup-1024.png" class="w-14 mx-auto" style={{marginBottom: "-20px"}} />
                    </div>
                </div>
                <h2 class="lg:text-2xl text-xl text-emerald-600 font-medium">{member.name}</h2>
            </div>
        );
    } else {
        memberContent = (
            <div className={member.rank == 2 ? "basis-1/4 self-end order-first" : "basis-1/4 self-end"}>
                <img class="rounded-full mx-auto mb-2 w-11/12 border-4 border-emerald-500 p-1" src={member.avatar} />
                <h2 class="lg:text-2xl text-emerald-600 whitespace-nowrap">{member.name}</h2>
                <span class="text-sm font-medium">#{member.rank}</span> - <span class="text-sm ">{member.totalXPPoints}</span>
            </div>
        );
    }

    memberContent = (
        <a href="" class="contents text-center">{memberContent}</a>
    );

    return (memberContent);
}