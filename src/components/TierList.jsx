import tiers from "../constants/tiers";
import SpotlightCard from "./addition/SpotlightCard";

import '../App.css'

const TierList = () => {
    const tierList = tiers
    return (
        <section>
            <div className="text-lg mb-12" id="PRICING">Choose a plan that fits your business needs. Whether you're just getting started or ready to scale, our flexible pricing ensures you get the right tools at the right time — no hidden fees, just smart features.</div>
            <section className="flex flex-col lg:flex-row gap-16 md:gap-8 justify-between">
                <div className="grow">
                    <SpotlightCard className="border border-neutral-300 text-neutral-700 mb-6 p-8 h-full" spotlightColor="rgba(0, 229, 255, 0.7)">
                        <div className="text-xl font-semibold mb-4 text-center">Tier 1</div>
                        <div className="flex flex-col justify-center gap-1">
                            {tierList.tier_1.list.map((item, index) => {
                                return (
                                    <div key={`one_${index}`} className={!item.isOn ? 'opacity-30' : 'font-medium'}>
                                        <span>•</span> {item.title}
                                    </div>)
                            })}
                        </div>
                    </SpotlightCard>
                    <button className="w-full rounded-lg tier-1 text-white py-2 cursor-pointer transition-all font-medium">Choose Tier 1</button>
                </div>

                <div className="grow">
                    <SpotlightCard className="border border-neutral-300 text-neutral-700 mb-6 p-8 h-full" spotlightColor="rgba(0, 255, 153, 0.7)">
                        <div className="text-xl font-semibold mb-4 text-center">Tier 2</div>
                        <div className="flex flex-col justify-center gap-1">
                            {tierList.tier_2.list.map((item, index) => {
                                return (
                                    <div key={`two_${index}`} className={!item.isOn ? 'opacity-30' : 'font-medium'}>
                                        <span>•</span> {item.title}
                                    </div>)
                            })}
                        </div>
                    </SpotlightCard>
                    <button className="w-full rounded-lg tier-2 text-white py-2 cursor-pointer transition-all font-medium">Choose Tier 2</button>
                </div>
                <div className="grow">
                    <SpotlightCard className="border border-neutral-300 text-neutral-700 mb-6 p-8 h-full" spotlightColor="rgba(255, 0, 225, 0.7)">
                        <div className="text-xl font-semibold mb-4 text-center">Tier 3</div>
                        <div className="flex flex-col justify-center gap-1">
                            {tierList.tier_3.list.map((item, index) => {
                                return (
                                    <div key={`three_${index}`} className="font-medium">
                                        <span>•</span> {item.title}
                                    </div>)
                            })}
                        </div>
                    </SpotlightCard>
                    <button className="w-full rounded-lg tier-3 text-white py-2 cursor-pointer transition-all font-medium">Choose Tier 3</button>
                </div>
            </section>
        </section>
    )
}

export default TierList