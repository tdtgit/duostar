import { Tooltip } from "flowbite-react";
import GoldCup from "./images/gold-cup.png";
import SilverCup from "./images/silver-cup.png";
import BronzeCup from "./images/bronze-cup.png";
import { Animated } from "react-animated-css";

export default function Member({ member }) {
    let styleAvatar = (avatar) => {
        return {
            background: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%), url(${avatar})`,
            backgroundSize: "cover",
        };
    };

    let animationThing = (element) => {
        return (
            <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={200} isVisible={true}>
                {element}
            </Animated>
        )
    }

    let Cheeries = [
        "You're doing great!",
        "Keep up the good work!",
        "You're a rockstar!",
        "You're a legend!",
        "You're a superstar!",
        "You're a champion!",
        "On fire!",
        "Outstanding!",
        "Keep it up!",
    ]

    let FirstAvatar = member.avatar.replace("xlarge", "xxlarge");
    let FirstComment = `${member.name} is the current leader with ${member.streak} streak and ${member.totalXPPoints} Duo points, total points: ${member.totalPoints}. ${Cheeries[Math.floor(Math.random() * Cheeries.length)]}`;
    let SecondaryComment = `${member.name} is the current second place with ${member.streak} streak, ${member.totalXPPoints} Duo points , total points: ${member.totalPoints}. ${Cheeries[Math.floor(Math.random() * Cheeries.length)]}`;
    let ThirdComment = `${member.name} is the current third place with ${member.streak} streak, ${member.totalXPPoints} Duo points, total points: ${member.totalPoints}. ${Cheeries[Math.floor(Math.random() * Cheeries.length)]}`;

    let memberContent;
    if (member.rank === 1) {
        memberContent = (
            <div className="basis-1/2 mb-4">
                <Tooltip
                    content={FirstComment}
                    placement="bottom"
                >
                    {
                        animationThing(
                            <div className="relative mb-8">
                                <div className="w-10/12 h-auto rounded-full mx-auto" style={styleAvatar(FirstAvatar)}>
                                    <img alt={member.name} className="rounded-full mx-auto mb-3  border-8 border-emerald-500 p-1 z-10 invisible" src={FirstAvatar} />
                                </div>
                                <div className="absolute bottom-0 w-full">
                                    <img alt={member.name} src={GoldCup} className="md:w-20 w-16 mx-auto" style={{ marginBottom: "-20px" }} />
                                </div>
                            </div>
                        )
                    }
                    <h2 className="lg:text-2xl text-xl text-emerald-600 font-medium">{member.name}</h2>
                    <h6 className="text-gray-400 text-sm">⭐️ {member.totalPoints}</h6>
                </Tooltip>
            </div>
        );
    } else {
        memberContent = (
            <div className={member.rank === 2 ? "basis-1/4 self-end order-first" : "basis-1/4 self-end"}>
                <Tooltip
                    content={member.rank === 2 ? SecondaryComment : ThirdComment}
                    placement="bottom"
                >
                    {
                        animationThing(
                            <div className="relative mb-8">
                                <div className="w-10/12 h-auto rounded-full mx-auto" style={styleAvatar(member.avatar)}>
                                    <img alt={member.name} className="rounded-full mx-auto mb-3  border-8 border-emerald-500 p-1 z-10 invisible" src={member.avatar} />
                                </div>
                                <div className="absolute bottom-0 w-full">
                                    {member.rank === 2 ? (
                                        <img alt="Silver cup" src={SilverCup} className="md:w-14 w-10 mx-auto" style={{ marginBottom: "-20px" }} />
                                    ) : (
                                        <img alt="Bronze cup" src={BronzeCup} className="md:w-12 w-10 mx-auto" style={{ marginBottom: "-20px" }} />
                                    )}
                                </div>
                            </div>
                        )
                    }
                    <h2 className="md:text-xl text-emerald-600 font-medium whitespace-nowrap">{member.name}</h2>
                    <h6 className="text-gray-400 text-sm">⭐️ {member.totalPoints}</h6>
                </Tooltip>
            </div>
        );
    }

    memberContent = (
        <a href={`https://www.duolingo.com/profile/${member.username}`} className="contents text-center" target="_blank" rel="noreferrer">{memberContent}</a>
    );

    return (memberContent);
}