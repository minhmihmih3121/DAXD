import { memo,React } from "react";
import "./style.scss";
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { formatter } from "../../../../utils/fomater";
import logo from "../../../../assets/users/image1.png"
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { ROUTERS } from "../../../../utils/router";


const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "MẪU CĂN HỘ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "NGUYÊN VẬT LIỆU",
            path: ROUTERS.USER.HOME,
            isShowSubMenu: "false",
            child: [
                {
                    name: "Xi măng",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Gạch lát nền",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Gạch lát tường",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Thép",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Đá",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Sơn",
                    path: ROUTERS.USER.HOME,
                },
            ]
        },
        {
            name: "THÔNG TIN",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "LIÊN HỆ",
            path: ROUTERS.USER.HOME,
        },
    ]);

    return (
        <div>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li>
                                    3121minh@gmail.com
                                </li>
                                <li>
                                    freeship {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header-top-right">
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <AiOutlineInstagram/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <AiOutlineLinkedin/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IoPersonCircle />
                                        <span className="login-span">Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3">
                        <div className="logo-frame">
                            <div className="header__logo">
                                <img className="logo-image" src={logo} alt="Logo" />
                                <h2 id="company-name">MatiQ</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <nav className="header__menu">
                            <ul>    
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey===0 ? "active" : ""}>
                                        <Link to="#">{menu?.name}</Link>
                                    </li>
                                ))}
                                
                                {/* <li>MẪU CĂN HỘ</li>
                                <li>
                                    
                                    <ul>
                                        <li>Xi măng</li>
                                    </ul>
                                </li>
                                <li>THÔNG TIN</li>
                                <li>LIÊN HỆ</li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(29615)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#"><FiShoppingCart />
                                    <span>5</span>
                                    </Link>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Header);