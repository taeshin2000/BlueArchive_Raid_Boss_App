const Hieronymus = {
  bossName: "Hieronymus",
  terrain: ["Indoors", "Urban"],
  armorType: "Light Armor",
  attackType: "Explosive",
  skills: [
    {
      normal: [
        {
          skillname: "Damasus' Call",
          description: (
            <p>
              Deals <b>350% damage</b> to enemies in a circular area.
              <b> Increases damage</b> by up to 50% the lower the target's
              current HP.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill1.jpg",
        },
        {
          skillname: "Vulgate's Sacred Book",
          description: (
            <p>
              Inflicts curse on one enemy for 10s, continuously dealing
              <b> 20% damage</b> over time. After 10s, the target will explode
              dealing <b>325% damage</b> in a circular area around them. If the
              target is healed to 100% HP, the curse will be removed.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill2.jpg",
        },
        {
          skillname: "Reaper's Execution",
          description: (
            <p>
              Deals <b>90% damage</b> to enemies in a circular area.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill3.jpg",
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
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill4.jpg",
        },
        {
          skillname: "Holy Light (Relic)",
          description: (
            <p>
              When a relic is healed to 100% HP, drains all HP and decreases
              <b> recovery rate</b> by 50% for 20s and activates one of the
              following effects depending on the relic: Green Relic: Increases
              Hieronymus's <b>damage taken</b> by 55% until the end of battle.
              Effect can stack up to 5 times. Red Relic: Interrupts Hieronymus's
              currently active skill. If a skill is successfully interrupted,
              increases Hieronymus's stagger gauge significantly and increases
              the skill cost recovery speed of up to 4 students by 2500 for 1s.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill5.jpg",
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
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill1.jpg",
        },
        {
          skillname: "Vulgate's Sacred Book",
          description: (
            <p>
              Inflicts curse on one enemy for 10s, continuously dealing
              <b> 20% damage</b> over time. After 10s, the target will explode
              dealing <b>325% damage</b> in a circular area around them. If the
              target is healed to 100% HP, the curse will be removed. In
              addition, the <b>recovery rate</b> of cursed enemies is increased
              by 3,000 for 10s.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill2.jpg",
        },
        {
          skillname: "Reaper's Execution",
          description: (
            <p>
              Deals <b>90% damage</b> to enemies in a circular area.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill3.jpg",
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
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill4.jpg",
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
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill5.jpg",
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
              <b> recovery rate</b> increased by a further 4,000 for 10s.
              (Purple relics are not targets for normal attacks or normal
              skills.)
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_skill6.jpg",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "14.5M - 14.8M",
          lineUp: [
            { displayName: "Akane", name: "akane" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "14.4M - 14.6M",
          lineUp: [
            { displayName: "Akane", name: "akane" },
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Karin", name: "karin" },
          ],
        },
        {
          score: "14M - 14.3M",
          lineUp: [
            { displayName: "Akane", name: "akane" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Hibiki", name: "hibiki" },
          ],
        },
        {
          score: "13.9M - 14M",
          lineUp: [
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Serika", name: "serika" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Chinatsu", name: "chinatsu" },
          ],
        },
      ],
      insane: [
        {
          score: "25.8M - 26.2M",
          lineUp: [
            { displayName: "Saori", name: "saori" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Kokona", name: "ch0137" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "25.8M - 26.1M",
          lineUp: [
            { displayName: "Mari.G", name: "ch0186" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "25.2M - 25.8M",
          lineUp: [
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Kokona", name: "ch0137" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "14.4M - 14.6M",
          lineUp: [
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Shizuko.S", name: "ch0155" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "14.4M - 14.6M",
          lineUp: [
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Nonomi.S", name: "ch0092" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Seina", name: "serina" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "14M - 14.6M",
          lineUp: [
            { displayName: "Shun.L", name: "ch0066" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Seina", name: "serina" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "13.8M - 13.9M",
          lineUp: [
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Serika", name: "serika" },
            { displayName: "Seina", name: "serina" },
            { displayName: "Chinatsu", name: "chinatsu" },
          ],
        },
      ],
      insane: [
        {
          score: "25M - 25.9M",
          lineUp: [
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Nonomi.S", name: "ch0092" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Nodoka.O", name: "ch0165" },
          ],
        },
        {
          score: "24.8M - 24.9M",
          lineUp: [
            { displayName: "Nonomi.S", name: "ch0092" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Atsuko", name: "atsuko" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0155" },
          ],
        },
        {
          score: "25M - 25.8M",
          lineUp: [
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0155" },
          ],
        },
        {
          score: "24.8M - 25M",
          lineUp: [
            { displayName: "Atsuko", name: "atsuko" },
            { displayName: "Saori", name: "saori" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Misaki", name: "misaki" },
            { displayName: "Hanae", name: "hanae" },
            { displayName: "Hiyori", name: "hiyori" },
          ],
        },
      ],
    },
  ],
};

export const HieronymusDetail = Hieronymus;
