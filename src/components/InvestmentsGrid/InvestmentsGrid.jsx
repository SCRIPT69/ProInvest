import React, { useState } from 'react';
import styles from './InvestmentsGrid.module.css';
import { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const InvestmentsGrid = ({investments}) => {
    return (
        <div className={styles.InvestmentsGrid}>
            {investments.map((investment) =>
                <div key={investment.id} className={styles.InvestmentsGrid__itemWrapper}>
                    <div className={styles.InvestmentsGrid__item}
                        //opening and closing logic
                        onClick={(e) => {
                            e.currentTarget.className = styles.InvestmentsGrid__item_active;

                            function setClosingEvent(target) {
                                //closure for saving currentTarget to item
                                let item = target;
                                function closeItem(e) {
                                    if (e.target.closest("."+styles.InvestmentsGrid__item_active) == item) {
                                        //not closing, if clicked on the current item
                                        return;
                                    }
                                    item.className = styles.InvestmentsGrid__item;
                                    window.removeEventListener("click", closeItem);
                                }
                                //timeout, because otherwise it will trigger the event instantly
                                setTimeout(() => {
                                    window.addEventListener("click", closeItem);
                                }, 1);
                            }
                            setClosingEvent(e.currentTarget);
                        }}
                    >
                        <img src={investment.img} alt="" className={styles.InvestmentsGrid__item_img} />
                        <div className={styles.InvestmentsGrid__item_content}>
                            <div className={styles.InvestmentsGrid__item_name}>{investment.name}</div>
                            <div className={styles.InvestmentsGrid__item_location}>{investment.location}</div>
                            <div className={styles.InvestmentsGrid__item_description}>{investment.description}</div>

                            <div className={styles.InvestmentsGrid__item_progressbar}>
                                <div className={styles.InvestmentsGrid__item_progressbar} style={{position:"relative",backgroundColor:"#5E4DCD",width:investment.rasiedPercent+"%"}}></div>
                            </div>
                            <div className={styles.InvestmentsGrid__item_raisedText}><span className={styles.InvestmentsGrid__item_raisedValue}>${investment.raisedValue}</span> raised of ${investment.ofValue}</div>

                            <div className={styles.InvestmentsGrid__loweritem_line}></div>
                            <div className={styles.InvestmentsGrid__loweritem_content}>
                                <div className={styles.InvestmentsGrid__loweritem_row}>
                                    <div className={styles.InvestmentsGrid__loweritem_ltext}>Security Type</div>
                                    <div className={styles.InvestmentsGrid__loweritem_rtext}>Revenue Sharing Note</div>
                                </div>
                                <div className={styles.InvestmentsGrid__loweritem_row}>
                                    <div className={styles.InvestmentsGrid__loweritem_ltext}>Investment Multiple</div>
                                    <div className={styles.InvestmentsGrid__loweritem_rtext}>1.4x</div>
                                </div>
                                <div className={styles.InvestmentsGrid__loweritem_row}>
                                    <div className={styles.InvestmentsGrid__loweritem_ltext}>Maturity</div>
                                    <div className={styles.InvestmentsGrid__loweritem_rtext}>48 Months</div>
                                </div>
                                <div className={styles.InvestmentsGrid__loweritem_row}>
                                    <div className={styles.InvestmentsGrid__loweritem_ltext}>Min. Investment</div>
                                    <div className={styles.InvestmentsGrid__loweritem_rtext}>$100</div>
                                </div>
                            </div>
                        </div>
                        <a className={styles.InvestmentsGrid__item_button} href="">VIEW</a>
                    </div>
                </div>
            )}
        </div>
    )
}
export default InvestmentsGrid;
