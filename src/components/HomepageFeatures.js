import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easily create structured logs',
        description: (
            <>
                Send log events as structured parcels of data, not simply message strings.
                Create structured logs easily using message templates.
                <img src="/static/img/structured-log-example.png" alt="Structured log example"/>
            </>
        ),
    },
    {
        title: 'Log information about execution scope',
        description: (
            <>
                You can store information in Kotlin coroutine scopes so Klogging includes it
                in log events. There is no need to manage removal of information from scopes
                because Kotlin coroutines take care of that.
            </>
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
    },
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
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
