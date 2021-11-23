import Education from "./Education";
import Experience from "./Experience";
import Tag from "./Tag";
import Icon from "./Icon";
import { isEmpty } from "./functions";

const Resume = ({ resume, style }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <div style={{}} className="resume">
        <aside className="aside">
          <section style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={resume.basics.picture}
              style={{ height: 150, borderRadius: "100%" }}
              alt="me"
            />
          </section>
          <section className="profiles">
            {(resume.basics.profiles || []).map((p, k) => (
              <span key={k} className="profile">
                <a
                  href={p.url}
                  target="_blank"
                  style={{ display: "inline-flex", alignItems: "center" }}
                  rel="noreferrer"
                >
                  <Icon url={p.url} />
                </a>
              </span>
            ))}
          </section>
          <section>
            <h3 style={{ marginBottom: "0.5rem" }}>Summary</h3>
            <p>{resume.basics.summary}</p>
          </section>

          {isEmpty(resume.skills) ? null : (
            <section style={{ marginBottom: "0.5em" }} className="skills">
              <h3 style={{ marginBottom: "0.5em" }}>Skills</h3>
              {(resume.skills || []).map((item, k) => (
                <div key={k}>
                  <div>
                    {item.name}
                    <Tag>{item.level}</Tag>
                  </div>
                  <div>
                    {(item.keywords || []).map((tag, k) => (
                      <Tag key={k} color="secondary">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
          {isEmpty(resume.languages) ? null : (
            <section style={{ marginBottom: "0.5em" }} className="languages">
              <h3 style={{ marginBottom: "0.5em" }}>Languages</h3>
              {(resume.languages || []).map((item, k) => (
                <div key={k}>
                  <span>{item.language}</span>
                  <Tag>{item.fluency}</Tag>
                </div>
              ))}
            </section>
          )}
          {isEmpty(resume.interests) ? null : (
            <section className="interests">
              <h3 style={{ marginBottom: "0.5em" }}>Interests &amp; Hobbies</h3>
              {(resume.interests || []).map((item, k) => (
                <div key={k}>
                  <span>{item.name}</span>
                  <div>
                    {(item.keywords || []).map((tag, k) => (
                      <Tag key={k} color="secondary">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
          {isEmpty(resume.inspirers) ? null : (
            <section className="inspirers">
              <h3 style={{ marginBottom: "0.5em" }}>Inspired by</h3>
              {(resume.inspirers || []).map((item, k) => (
                <div key={k}>
                  <span>{item.name}</span>
                  <div>
                    {(item.keywords || []).map((tag, k) => (
                      <Tag key={k} color="secondary">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </aside>
        <section className="main">
          <div style={{ marginTop: 40 }}>
            <h1>{resume.basics.name}</h1>
            <h5 style={{ textTransform: "uppercase", marginTop: -20 }}>{resume.basics.label}</h5>
          </div>
          <Experience header="Work Experience" items={resume.work || []} />
          <Experience header="Volunteering" items={resume.volunteer || []} />
          <Experience header="Awards" items={resume.awards || []} />
          <Education education={resume.education || []} />
        </section>
      </div>
    </div>
  );
};

export default Resume;
