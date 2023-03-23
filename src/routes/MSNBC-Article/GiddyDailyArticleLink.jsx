import React from 'react'

export default function GiddyDailyArticleLink({url, index, length, aName, pName, title}) {
  return (
    <a className="col-md-5 col-xl-3" href={url} key={index}>
        <div className="giddy-daily-container flex-xl-row mb-4 justify-content-center">
            <div className="giddy-daily-text-container pt-3">
                {/* Number */}
                <h3 className="giddy-daily-number text-ivy-light-italic font-size-32">{index + 1}.</h3>

                <div className="giddy-daily-titlle-title-container">
                    {/* Taxonomy */}
                    <p className="taxonomy mb-lg-2 text-slate-pro-condensed text-tidal font-size-16">
                        {length
                        ? aName
                        : pName}
                    </p>

                    {/* Title */}
                    <h3 className="text-slate-pro-bold font-size-16">{title}</h3>
                </div>
            </div>
        </div>
    </a>
  )
}
