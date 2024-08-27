"use client"
import Header from "@/components/Header";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tooltip from "@/components/ui/Tooltip";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  const [selectedOptionPrimary, setSelectedOptionPrimary] = useState('');
  const [selectedOptionSecondary, setSelectedOptionSecondary] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto my-10">
          <div className="mb-10 mx-5 sm:mx-0">
            <h1 className="text-[40px] font-bold">Components</h1>
          </div>
        {/* Components */}
          <div className="space-y-10 mx-5 sm:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:w-1/2">
                <Button>Primary</Button>
                <Button variant="secondary" shape="rounded">Secondary</Button>
                <Button variant="danger" shape="square">Danger</Button>
                <Button variant="text">Text</Button>
            </div>
            <div>
                <Input placeholder="Type here..." icon={<FiSearch />} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <Tooltip text="from Wikipedia">
                  <Card title="Red Velvet">
                      Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                  </Card>
                </Tooltip>
                <Card title="Red Velvet" variant="secondary">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
                <Card title="Red Velvet" variant="danger">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
                <Card title="Red Velvet" variant="text">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
            </div>
            <div>
              <Accordion title="Red Velvetはどんなグループですか？" variant="secondary">
                <p>Red Velvet（レッドベルベット）は2014年8月に韓国でデビューしたSMエンターテイメント所属の5人組ガールズグループです。 インパクトの強い魅惑的なイメージの「Red」と、柔らかく女性らしい「Velvet」を併せ持ち、多面的で洗練された魅力を発信できるグループとして誕生しました。</p>
              </Accordion>
              <Accordion title="Red Velvetの有名な曲は？" variant="secondary">
                <p className="font-bold">Red Velvetの人気曲ランキング【2024】</p>
                <ul>
                  <li>Cosmic</li>
                  <li>Future</li>
                  <li>Russian Roulette</li>
                  <li>Sweet Dreams</li>
                  <li>Red Flavor</li>
                  <li>Feel My Rhythm</li>
                </ul>
              </Accordion>
            </div>
            <div className="space-y-5">
              <Select
                options={options}
                value={selectedOptionPrimary}
                onChange={setSelectedOptionPrimary}
                placeholder="Choose an option"
              />
              <Select
                options={options}
                value={selectedOptionSecondary}
                onChange={setSelectedOptionSecondary}
                placeholder="Choose an option"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}