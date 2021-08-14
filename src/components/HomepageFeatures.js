import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easily create structured logs',
        description: (
            <>
                Send log events as structured parcels of data, not simply message strings.
            </>
        ),
        details: (
            <p>
                When you use a message template in logging code:
                <img src="/static/img/log-info-user-logged-in.png" alt="Logging for user logged in"/>
                Klogging creates a structured log event:
                <img src="/static/img/clef-json-user-logged-in.png" alt="JSON log event for user logged in"/>
            </p>
        ),
    },
    {
        title: 'Log information about execution scope',
        description: (
            <>
                You can store information in Kotlin coroutine scopes and Klogging includes it
                in log events. There is no need to manage removal of information from scopes
                because Kotlin coroutines take care of that.
            </>
        ),
        details: (
            <p>
                Put some information into coroutine scope:
                <img src="/static/img/log-info-coroutine-log-context.png" alt="Logging with coroutine context"/>
                Klogging includes the information in the log event:
                <img src="/static/img/clef-json-coroutine-log-context.png" alt="JSON log event with coroutine context"/>
            </p>
        ),
    },
    {
        title: 'High-resolution timestamps',
        description: (
            <>
                Be confident about the order in which log events from a host were produced.
                Klogging uses the finest resolution available: at least microsecond, and
                down to nanosecond if available.
            </>
        ),
        details: (
            <p>
                Avoid the situation where you need to know the order of log events but
                can’t tell from the log aggregation:
                <img src="/static/img/log-messages-same-millisecond.png" alt="Log messages at same millisecond"/>
            </p>
        ),
    },
];

function Feature({title, description, details}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="text--left">{details}</div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
