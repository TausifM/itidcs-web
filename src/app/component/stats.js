export default function Stats() {
    const content = {
      title: "We approach work as a place to make the world better",
      titleClass: "ayk azr azt azw baw daa",
      description:
        "Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.",
      descriptionClass: "hk ayy bat",
      containerClass: "aoc auy cxr",
      wrapperClass: "fy vy auc dwm",
      headerClass: "fy vt dlx",
      statsContainerClass: "fy hs la vt aas abr dlx dmn dqi drz dsc",
    };
  
    const stats = [
      {
        id: 1,
        name: "Users on the platform",
        nameClass: "ayo azr azt baw",
        value: "250k",
        valueClass: "wt ayj azo azt baw",
        description: "Vel labore deleniti veniam consequuntur sunt nobis.",
        descriptionClass: "hf ayy bat",
        className: "la aat abe acl adk afu akr ato cqw crt ctf ctk dpr dqi dqq dry dsd",
      },
      {
        id: 2,
        name: "We’re proud that our customers have made over $8 billion in total revenue.",
        nameClass: "ayo azr azt bdk",
        value: "$8.9 billion",
        valueClass: "wt ayj azo azt bdk",
        description: "Eu duis porta aliquam ornare. Elementum eget magna egestas.",
        descriptionClass: "hf ayy bar",
        className: "la aat abe acl adk afu alk ato ctf ctk dpx dqj dqp dry dsd dth",
      },
      {
        id: 3,
        name: "Transactions this year",
        nameClass: "ayo azr azt bdk",
        value: "401,093",
        valueClass: "wt ayj azo azt bdk",
        description:
          "Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.",
        descriptionClass: "hf ayy bbg",
        className: "la aat abe acl adk afu amg ato cqy crw ctf ctk dpx dqi dqp dry dsd dtg",
      },
    ];
  
    return (
      <div className={content.containerClass}>
        <div className={content.wrapperClass}>
          {/* Header */}
          <div className={content.headerClass}>
            <h2 className={content.titleClass}>{content.title}</h2>
            <p className={content.descriptionClass}>{content.description}</p>
          </div>
  
          {/* Stats Section */}
          <div className={content.statsContainerClass}>
            {stats.map((stat) => (
              <div key={stat.id} className={stat.className}>
                <p className={stat.valueClass}>{stat.value}</p>
                <div className="cre csc dpw dqq">
                  <p className={stat.nameClass}>{stat.name}</p>
                  <p className={stat.descriptionClass}>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  