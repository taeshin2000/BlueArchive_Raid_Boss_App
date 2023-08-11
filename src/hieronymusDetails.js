export const Hieronymus = {
  bossName: "Hieronymus",
  terrain: ["Indoors", "Urban"],
  skills: [
    {
      normal: [
        {
          skillname: "Damasus' Call",
          description: (
            <p>
              Deals <b>350% damage</b> to enemies in a circular area.
              <b>Increases damage</b> by up to 50% the lower the target's
              current HP.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill1.jpg",
        },
        {
          skillname: "Vulgate's Sacred Book",
          description: (
            <p>
              Inflicts curse on one enemy for 10s, continuously dealing
              <p>20% damage</p> over time. After 10s, the target will explode
              dealing <p>325% damage</p> in a circular area around them. If the
              target is healed to 100% HP, the curse will be removed.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill2.jpg",
        },
        {
          skillname: "Reaper's Execution",
          description: (
            <p>
              Deals <b>90% damage</b> to enemies in a circular area.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill3.jpg",
        },
        {
          skillname: "Desert Penance",
          description: (
            <p>
              Every 10s, deals <b>40% damage</b> to all enemies. If Hieronymus's
              ATG gauge is full, <b>deals damage</b> to each enemy equal to
              1000% of their Max HP.s
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill4.jpg",
        },
        {
          skillname: "Holy Light (Relic)",
          description: (
            <p>
              When a relic is healed to 100% HP, drains all HP and decreases
              <b>recovery rate</b> by 50% for 20s and activates one of the
              following effects depending on the relic: Green Relic: Increases
              Hieronymus's <b>damage taken</b> by 55% until the end of battle.
              Effect can stack up to 5 times. Red Relic: Interrupts Hieronymus's
              currently active skill. If a skill is successfully interrupted,
              increases Hieronymus's stagger gauge significantly and increases
              the skill cost recovery speed of up to 4 students by 2500 for 1s.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill5.jpg",
        },
      ],
      insane: [
        {
          skillname: "Damasus' Call",
          description: (
            <p>
              Deals <b>350% damage</b> to enemies in a circular area.
              <b>Increases damage</b> by up to 50% the lower the target's
              current HP.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill1.jpg",
        },
        {
          skillname: "Vulgate's Sacred Book",
          description: (
            <p>
              Inflicts curse on one enemy for 10s, continuously dealing
              <b>20% damage</b> over time. After 10s, the target will explode
              dealing <b>325% damage</b> in a circular area around them. If the
              target is healed to 100% HP, the curse will be removed. In
              addition, the <b>recovery rate</b> of cursed enemies is increased
              by 3,000 for 10s.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill2.jpg",
        },
        {
          skillname: "Reaper's Execution",
          description: (
            <p>
              Deals <b>90% damage</b> to enemies in a circular area.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill3.jpg",
        },
        {
          skillname: "Desert Penance",
          description: (
            <p>
              Every 10s, deals <b>30% damage</b> to all enemies. If Hieronymus's
              ATG gauge is full, grants <b>invulnerability</b> to all enemies
              for 10s, <b>deals damage</b> to each enemy equal to 1000% of their
              Max HP, and increases <b>recovery</b> rate by 2,000 for 10s.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill4.jpg",
        },
        {
          skillname: "Holy Light (Relic)",
          description: (
            <p>
              When a relic is healed to 100% HP, drains all HP and decreases
              <b>recovery rate</b> by 50% for 20s and activates the following
              effects: Green Relic: Increases Hieronymus's <b>damage taken</b>
              by 55% until the end of battle. Effect can stack up to 5 times.
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill5.jpg",
        },
        {
          skillname: "Unholy Light (Relic)",
          description: (
            <p>
              When a relic reaches 0% HP, activates the following effects:
              Purple Relic: Increases the <b>attack power</b> of all Strikers
              and Special Students by 25% and reduces their recovery rate by
              7,000. In addition, decreases Hieronymus's <b>defense</b> by 1,500
              until the end of battle. Students who are cursed will have their
              <b>recovery rate</b> increased by a further 4,000 for 10s. (Purple
              relics are not targets for normal attacks or normal skills.)
            </p>
          ),
          url: "/images/Boss/Hieronymus/Hieronymus_skill6.jpg",
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
