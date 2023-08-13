const Kaiten = {
  bossName: "Kaiten",
  terrain: ["Outdoors", "Urban"],
  armorType: "Light Armor",
  attackType: "Penetration",
  skills: [
    {
      normal: [
        {
          skillname: "MUGEN KAITEN ・ SUPER SHRIMP MACHINE GUN",
          description: (
            <p>
              Right Arm (Pink): Deals <b>400% damage</b> to enemies in a
              circular area.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill1.png",
        },
        {
          skillname: "MUGEN KAITEN ・ HYPER SARDINE MISSILES",
          description: (
            <p>
              Chest (Red): Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill2.png",
        },
        {
          skillname: "MUGEN KAITEN ・ ULTRA PLATE SHIELD",
          description: (
            <p>
              Left Arm (Green): Decreases <b>damage taken</b> by 50%. This buff
              is removed after taking 10 hits from any EX skill.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill3.png",
        },
        {
          skillname: "MUGEN KAITEN ・ FINAL MACKEREL SLASH",
          description: (
            <p>
              Deals <b>400% damage</b> to all enemies. This attack cannot be
              blocked or evaded.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill4.png",
        },
        {
          skillname: "Set Your Heart Ablaze...... It's not over yet",
          description: (
            <p>
              Every 20s, each component of KAITEN FX Mk.0 will activate in the
              following order: Right Arm (Pink), Chest (Red), Left Arm (Green).
              When a component is activated, KAITEN FX Mk.0 will gain one of the
              following effects: Right Arm (Pink): <b>Increases attack</b> by
              50%. Chest (Red): KAITEN FX Mk.0's EX skills will also inflict
              <b> stun</b> for 5s. Left Arm (Green): <b>Increases</b> defense by
              1,000. If a certain amount of damage is dealt while a component is
              active, that component will be destroyed, increasing KAITEN FX
              Mk.0's stagger gauge significantly and disabling both the
              component from activating and the corresponding EX skill until the
              end of battle.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill5.png",
        },
      ],
      insane: [
        {
          skillname: "MUGEN KAITEN ・ SUPER SHRIMP MACHINE GUN",
          description: (
            <p>
              Right Arm (Pink): Deals <b>400% damage</b> to enemies in a
              circular area.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill1.png",
        },
        {
          skillname: "MUGEN KAITEN ・ HYPER SARDINE MISSILES",
          description: (
            <p>
              Chest (Red): Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill2.png",
        },
        {
          skillname: "MUGEN KAITEN ・ ULTRA PLATE SHIELD",
          description: (
            <p>
              Left Arm (Green): Decreases <b>damage taken</b> by 50%. This buff
              is removed after taking 10 hits from any EX skill.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill3.png",
        },
        {
          skillname: "MUGEN KAITEN ・ FINAL MACKEREL SLASH",
          description: (
            <p>
              Deals <b>400% damage</b> to all enemies. This attack cannot be
              blocked or evaded.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill4.png",
        },
        {
          skillname: "Set Your Heart Ablaze...... It's not over yet",
          description: (
            <p>
              Every 20s, each component of KAITEN FX Mk.0 will activate in the
              following order: Right Arm (Pink), Chest (Red), Left Arm (Green).
              When a component is activated, KAITEN FX Mk.0 will gain one of the
              following effects: Right Arm (Pink): <b>Increases attack</b> by
              50%. Chest (Red): KAITEN FX Mk.0's EX skills will also inflict
              <b>stun</b> for 5s. Left Arm (Green): <b>Increases</b> defense by
              1,000. Additionally, KAITEN FX Mk.0's EX skills will inflict an
              80% <b>healing reduction</b> debuff for 30s. If a certain amount
              of damage is dealt while a component is active, that component
              will be destroyed, increasing KAITEN FX Mk.0's stagger gauge
              significantly and disabling both the component from activating and
              the corresponding EX skill until the end of battle.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill5.png",
        },
        {
          skillname: "MUGEN KAITEN・ Mega Egg Overcharge",
          description: (
            <p>
              Feet (Yellow): <b>Increases attack</b> by 4,000 for 30s
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill6.png",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "13M - 14M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "13M - 13.7M",
          lineUp: [
            { displayName: "Iori.S", name: "ch0064" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "13M -13.5M",
          lineUp: [
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Akari", name: "akari" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Haruka", name: "haruka" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
        {
          score: "12.5M -13M",
          lineUp: [
            { displayName: "Shun", name: "shun" },
            { displayName: "Serika", name: "serika" },
            { displayName: "Akari", name: "akari" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Kotama", name: "kotama" },
            { displayName: "Hanae", name: "hanae" },
          ],
        },
      ],
      insane: [
        {
          score: "24M - 24.8M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.8M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Tsukuyo", name: "ch0114" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.7M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Neru", name: "neru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.7M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Hina", name: "hina" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Nodoka.O", name: "ch0165" },
            { displayName: "Iori.S", name: "ch0064" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Mimori", name: "mimori" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "13M - 14M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "13M - 13.7M",
          lineUp: [
            { displayName: "Iori.S", name: "ch0064" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "13M -13.5M",
          lineUp: [
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Akari", name: "akari" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Haruka", name: "haruka" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
        {
          score: "12.5M -13M",
          lineUp: [
            { displayName: "Shun", name: "shun" },
            { displayName: "Serika", name: "serika" },
            { displayName: "Akari", name: "akari" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Azusa", name: "azusa" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Kotama", name: "kotama" },
            { displayName: "Hanae", name: "hanae" },
          ],
        },
      ],
      insane: [
        {
          score: "24M - 24.8M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.8M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Tsukuyo", name: "ch0114" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.7M",
          lineUp: [
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Neru", name: "neru" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Aru", name: "aru" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "24M - 24.7M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Hina", name: "hina" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Hina.S", name: "ch0063" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Nodoka.O", name: "ch0165" },
            { displayName: "Iori.S", name: "ch0064" },
            { displayName: "Shiroko", name: "shiroko" },
            { displayName: "Mutsuki", name: "mutsuki" },
            { displayName: "Mimori", name: "mimori" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
      ],
    },
  ],
};

export const KaitenDetail = Kaiten;
