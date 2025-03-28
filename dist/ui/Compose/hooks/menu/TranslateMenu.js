import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import locales from 'locale-codes';
import React, { useState } from 'react';
import { Item } from './Item.js';
import { Translate } from './items.js';
import styles from './menu.module.scss';
export const TranslateMenu = ({ onClick })=>{
    const [show, setShow] = useState(false);
    const filteredLocales = [
        locales.getByTag('en-my'),
        locales.getByTag('ms-my')
    ].filter((a)=>{
        return a.tag && a.location;
    });
    const [languages, setLanguages] = useState(filteredLocales);
    const [inputFocus, setInputFocus] = useState(false);
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.menu,
        onMouseLeave: ()=>{
            if (!inputFocus) {
                setShow(false);
            }
        },
        children: [
            /*#__PURE__*/ _jsx(Translate, {
                isActive: show,
                isMenu: true,
                onClick: ()=>{
                    setShow(!show);
                },
                onMouseEnter: ()=>setShow(true)
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.hoverMenu,
                "data-show": show,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: `${styles.menu} ${styles.subMenu}`,
                    children: [
                        /*#__PURE__*/ _jsx(Item, {
                            onClick: ()=>{},
                            style: {
                                background: 'transparent',
                                padding: '0 0 5px 0',
                                position: 'sticky',
                                top: 0
                            },
                            children: /*#__PURE__*/ _jsx("input", {
                                className: styles.menuInput,
                                onBlur: ()=>setInputFocus(false),
                                onChange: (event)=>{
                                    const value = event.target.value;
                                    setLanguages(filteredLocales.filter((l)=>{
                                        const lowerCaseValue = value.toLowerCase();
                                        return l.name.toLowerCase().startsWith(lowerCaseValue) || l.location.toLowerCase().startsWith(lowerCaseValue) || l.tag.toLowerCase().startsWith(lowerCaseValue);
                                    }));
                                },
                                onFocus: ()=>setInputFocus(true),
                                placeholder: "Search..."
                            })
                        }),
                        languages.map((locale)=>{
                            return /*#__PURE__*/ _jsx(Item, {
                                onClick: ()=>{
                                    onClick({
                                        locale: locale.tag
                                    });
                                },
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: styles.ellipsis,
                                    children: `${locale.location} (${locale.tag})`
                                })
                            }, locale.tag);
                        })
                    ]
                })
            })
        ]
    });
};

//# sourceMappingURL=TranslateMenu.js.map