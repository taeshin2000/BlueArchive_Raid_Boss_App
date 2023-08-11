export const Hieronymus = {
  bossName: "Hieronymus",
  terrain: ["Indoors", "Urban"],
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
              Left Arm (Green): Decreases <p>damage taken</p> by 50%. This buff
              is removed after taking 10 hits from any EX skill.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill3.png",
        },
        {
          skillname: "MUGEN KAITEN ・ FINAL MACKEREL SLASH",
          description: (
            <p>
              Deals <p>400% damage</p> to all enemies. This attack cannot be
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
              following effects: Right Arm (Pink): <p>Increases attack</p> by
              50%. Chest (Red): KAITEN FX Mk.0's EX skills will also inflict
              <p>stun</p> for 5s. Left Arm (Green): <p>Increases</p> defense by
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
              Left Arm (Green): Decreases <p>damage taken</p> by 50%. This buff
              is removed after taking 10 hits from any EX skill.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill3.png",
        },
        {
          skillname: "MUGEN KAITEN ・ FINAL MACKEREL SLASH",
          description: (
            <p>
              Deals <p>400% damage</p> to all enemies. This attack cannot be
              blocked or evaded.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill4.png",
        },
        {
          skillname: "MUGEN KAITEN・ Mega Egg Overcharge",
          description: (
            <p>
              Feet (Yellow): <p>Increases attack</p> by 4,000 for 30s
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill6.png",
        },
        {
          skillname: "Set Your Heart Ablaze...... It's not over yet",
          description: (
            <p>
              Every 20s, each component of KAITEN FX Mk.0 will activate in the
              following order: Right Arm (Pink), Chest (Red), Left Arm (Green).
              When a component is activated, KAITEN FX Mk.0 will gain one of the
              following effects: Right Arm (Pink): <p>Increases attack</p> by
              50%. Chest (Red): KAITEN FX Mk.0's EX skills will also inflict
              <p>stun</p> for 5s. Left Arm (Green): <p>Increases</p> defense by
              1,000. Additionally, KAITEN FX Mk.0's EX skills will inflict an
              80% <p>healing reduction</p> debuff for 30s. If a certain amount
              of damage is dealt while a component is active, that component
              will be destroyed, increasing KAITEN FX Mk.0's stagger gauge
              significantly and disabling both the component from activating and
              the corresponding EX skill until the end of battle.
            </p>
          ),
          url: "/images/Boss/Kaiten/Kaiten_skill5.png",
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
