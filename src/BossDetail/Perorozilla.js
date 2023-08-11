const Perorozilla = {
  bossName: "Perorozilla",
  terrain: ["Indoors", "Outdoors"],
  armorType: "Special Armor",
  attackType: "Mystic",
  skills: [
    {
      normal: [
        {
          skillname: "Incandescent Eye Laser",
          description: (
            <p>
              Decreases <b>defense</b> of one enemy by <b>9,999</b> for 60s and
              continuously deals <b>90% damage</b> to them for 10s.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill1.png",
        },
        {
          skillname: "Bubble",
          description: (
            <p>
              Deals <b>400% damage</b> to one enemy.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              Summons Perorominions and apply <b>Focused Target</b>.
              Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla. If a Perorominions's HP drops below 50%,
              they will be knocked down and permanently inflicted with{" "}
              <b>stun</b> and allies will no longer prioritize attacking the
              down peroros.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill3.png",
        },
        {
          skillname: "Absorb Perorominions",
          description: (
            <p>
              Absorbs all Perorominions. For every Perorominion that was knocked
              down, increases Perorodzilla's stagger gauge by a significant
              amount. When Perorodzilla is staggered, summons 5 broken
              Perorominions with reduced defense, these Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill4.png",
        },
        {
          skillname: "Hyper Spiral Eye Laser",
          description: (
            <p>
              When ATG gauge is full, Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill5.png",
        },
      ],
      insane: [
        {
          skillname: "Incandescent Eye Laser",
          description: (
            <p>
              Decreases <b>defense</b> of one enemy by <b>9,999</b> for 60s and
              continuously deals <b>90% damage</b> to them for 10s. At the end
              of the skill, if the Defense reduction effect remains, deals{" "}
              <b>250% damage</b> to enemies within a fan-shaped area.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill1.png",
        },
        {
          skillname: "Bubble",
          description: (
            <p>
              Deals <b>400% damage</b> to one enemy.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              Summons Perorominions and apply <b>Focused Target</b>.
              Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla. If a Perorominions's HP drops below 50%,
              they will be knocked down and permanently inflicted with{" "}
              <b>stun</b> and allies will no longer prioritize attacking the
              down peroros. Addtionally, summons a <b>Shiny Peroromions</b>{" "}
              which, when knocked down, deals <b>200,000 damage</b> to other
              Peroros in a circular area around it.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill3.png",
        },
        {
          skillname: "Absorb Perorominions",
          description: (
            <p>
              Absorbs all Perorominions. For every Perorominion that was knocked
              down, increases Perorodzilla's stagger gauge by a significant
              amount. When Perorodzilla is staggered, summons 5 broken
              Perorominions with reduced defense, these Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill4.png",
        },
        {
          skillname: "Hyper Spiral Eye Laser",
          description: (
            <p>
              When ATG gauge is full, Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "/images/Boss/Perorozilla/Perorozilla_skill5.png",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "Outdoors normal",
          lineUp: [
            { displayName: "Aru", name: "miyako" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1234,
          lineUp: [
            { displayName: "Aru", name: "aru_newyear" },
            { displayName: "Aru", name: "ch0215" },
            { displayName: "Aru", name: "maki" },
            { displayName: "Aru", name: "aris" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "kotama" },
          ],
        },
        {
          score: "14,000,000",
          lineUp: [
            { displayName: "Aru", name: "momoi" },
            { displayName: "Aru", name: "midori" },
            { displayName: "Aru", name: "shun" },
            { displayName: "Aru", name: "iori" },
            { displayName: "Aru", name: "serina" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
      insane: [
        {
          score: "Outdoors insane",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: "insane2",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "Urban normal",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1234,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Amogus", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
      insane: [
        {
          score: "Urban insane",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: "insane2",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
    },
  ],
};

export const PerorozillaDetail = Perorozilla;
