import React from 'react'
import './Homepage.css'

const Homepage = () => {
    return (
        <main>
            <section className="home-banner">
                <div className="home-background">
                    <img src="/images/home-bg.jpg" alt="" />
                </div>
                <div className="home-search">
                    <h1 className="title">Đúng nhà, đúng giá, đúng thời điểm</h1>
                    <div className="search-bar">
                        <ul className="services clearfix">
                            <li className="active">Mua</li>
                            <li >Thuê</li>
                            <li >Dự án</li>
                        </ul>
                        <div className="search clearfix">
                            <div className="search-keyword clearfix">
                                <input type="text" placeholder="Vui lòng nhập địa chỉ, đường, quận hoặc dự án ..."/>
                            </div>
                            <button type="submit" class="btn-search">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <ul className="search-filter clearfix">
                            <li>Toàn quốc</li>
                            <li>Loại bất động sản</li>
                            <li>Giá bán</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="home-apartment">
                <div className="container">
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ bán</h2>
                            <a className="btn-view-all" href="">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ cho thuê</h2>
                            <a className="btn-view-all" href="">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố bán</h2>
                            <a className="btn-view-all" href="">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố cho thuê</h2>
                            <a className="btn-view-all" href="">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                            <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                    <div className="apartment-item">
                                        <div className="item-image">
                                            <a>
                                                <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="top-caption">
                                                <div className="caption-title">
                                                    <a>Bán Căn hộ 2 PN The Sun Avenue - Dọn Vào Ở Ngay</a>
                                                </div>
                                                <div className="caption-address">
                                                    <address>Phường An Phú, Quận 2, Hồ Chí Minh</address>
                                                </div>
                                                <ul className="caption-list-infor">
                                                    <li>
                                                        <div className="icon bg-selection"></div>
                                                        <p>76 m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-hotel"></div>
                                                        <p>2</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon bg-bathroom"></div>
                                                        <p>2</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-caption">
                                                <div className="caption-price">
                                                    <p>4 tỷ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view-details">
                                            <a>Xem chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Homepage;