const HOD = {
  bossName: "Hod",
  terrain: ["Indoors", "Urban"],
  armorType: "Heavy Armor",
  attackType: "Mystic",
  skills: [
    {
      normal: [
        {
          skillname: "Destruction Type I",
          description: (
            <p>
              Deals <b>150% damage</b> to all enemies within a circulate range.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill1.png",
        },
        {
          skillname: "Destruction Type II",
          description: (
            <p>
              Deals <b>200% damage</b> to all enemies in a Straight Line.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill2.png",
        },
        {
          skillname: "Invader Pillar Generation",
          description: (
            <p>
              Summons an Invader Pillar, decreasing the <b>cost recovery</b> of
              enemies and allies by 350 in a circular area around it and forcing
              nearby defense turrets to attack enemies instead of Hod. The
              pillar's erosion field expands every 15s.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill3.png",
        },
        {
          skillname: "Energy Overload",
          description: (
            <p>
              Deal <b>150% damage</b> to all enemies. If Hod's HP is below 50%,
              deal <b>300% damage</b> to all enemies instead and destroy all
              Field Turrets.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill4.png",
        },
        {
          skillname: "Radiance Glory",
          description: (
            <p>
              Deals <b>740% damage</b> to all enemies and increases Hod's attack
              by 50% until the end of battle. Effect stacks up to 99 times.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill5.png",
        },
        {
          skillname: "Hidden Glory",
          description: (
            <p>
              Hod and all summoned Invader Pillar are immune to the effects of
              crowd-control. However, crowd-control abilities will fill their
              stun gauge proportional to the duration of the effect that would
              be inflicted. Once the stun gauge reaches a total equivalent to
              10s of crowd-control duration, inflicts the following effects:
              <br></br>
              <b>Hod:</b> When 6/7/8/9/10/15s of CC Time is accumulated,
              increases <b>damage taken</b> by 300% for 30s and decrease Hod's
              ATG gauge. Increase Stagger Gauge by 25,000,000.
              <br></br>
              <b>Invader Pillar:</b> When 6/7/8/9/10/15s of CC Time is
              accumulated, increases <b>damage taken</b> by 300% for 30s and
              reduce the <b>Erosion Field</b> range by 1 level.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill6.png",
        },
        {
          skillname: "In the Shadow of Honor",
          description: (
            <p>
              Hod and all summoned Invader Pillar have 400% increased
              <b> critical resistance.</b> Invader Pillar are also{" "}
              <b>immune </b>
              to effects of <b>focused fire</b>.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill7.png",
        },
      ],
      insane: [
        {
          skillname: "Destruction Type I",
          description: (
            <p>
              Deals <b>150% damage</b> 3 times to all enemies within a circular
              range and expands Invader Pillar <b>Erosion Field</b> range by 1
              level.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill1.png",
        },
        {
          skillname: "Destruction Type II",
          description: (
            <p>
              Deals <b>200% damage</b> to all enemies in a Straight Line.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill2.png",
        },
        {
          skillname: "Invader Pillar Generation",
          description: (
            <p>
              Summons an Invader Pillar, decreasing the <b>cost recovery</b> of
              enemies and allies by 350 in a circular area around it and forcing
              nearby defense turrets to attack enemies instead of Hod. The
              pillar's erosion field expands every 15s.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill3.png",
        },
        {
          skillname: "Energy Overload",
          description: (
            <p>
              Deal <b>150% damage</b> to all enemies. If Hod's HP is below 50%,
              deal <b>300% damage</b> to all enemies instead and destroy all
              Field Turrets.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill4.png",
        },
        {
          skillname: "Radiance Glory",
          description: (
            <p>
              Deals <b>740% damage</b> to all enemies and increases Hod's attack
              by 50% until the end of battle. Effect stacks up to 99 times.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill5.png",
        },
        {
          skillname: "Hidden Glory",
          description: (
            <p>
              Hod and all summoned Invader Pillar are immune to the effects of
              crowd-control. However, crowd-control abilities will fill their
              stun gauge proportional to the duration of the effect that would
              be inflicted. Once the stun gauge reaches a total equivalent to
              10s of crowd-control duration, inflicts the following effects:
              <br></br>
              <b>Hod:</b> When 15s of CC Time is accumulated, increases{" "}
              <b>damage taken</b> by 300% for 30s and decrease Hod's ATG gauge.
              Increase Stagger Gauge by 25,000,000.
              <br></br>
              <b>Invader Pillar:</b> When 15s of CC Time is accumulated,
              increases <b>damage taken</b> by 300% for 30s and reduce the
              <b> Erosion Field</b> range by 1 level.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill6.png",
        },
        {
          skillname: "In the Shadow of Honor",
          description: (
            <p>
              Hod and all summoned Invader Pillar have 400% increased
              <b> critical resistance.</b> Invader Pillar are also{" "}
              <b>immune </b>
              to effects of <b>focused fire</b>.
            </p>
          ),
          url: "/images/Boss/HOD/HOD_skill7.png",
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

export const HODDetail = HOD;
