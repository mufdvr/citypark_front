import React from 'react'

export default ({ bannerUrl, title, date, link }) =>
  <div className="new">
    <div className="n_foto">
      <img
        alt="pic"
        src={bannerUrl}
      />
    </div>
    <div className="n_body">
      <div className="n_date">{date}</div>
      <div className="n_title">
        <a href={link}>
              {title}
            </a>
      </div>
      <div className="n_ttx">
      </div>
    </div>
  </div>
