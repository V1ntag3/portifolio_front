<template>
    <div @click="abrirMenu()" class="menu">
        <span v-bind:class="{ 'line-one-aberto': aberto }" class="line line-one"></span>
        <span v-bind:class="{ 'line-two-aberto': aberto }" class="line line-two"></span>
    </div>
    <div v-bind:class="{ 'menu-opcoes-aberto': aberto }" class="menu-opcoes">
        <div v-bind:class="{ 'opcoes-aberto': aberto }" class="opcoes">
            <ul>
                <li style="margin-top: 0px;"><a href="#home" @click="aberto = false"><span>home</span></a></li>
                <li><a href="#hab" @click="aberto = false"><span>habilidades</span></a></li>
                <li><a href="#cert" @click="aberto = false"><span>certificações</span></a></li>
                <li><a href="#exp" @click="aberto = false"><span>experiência</span></a></li>
                <li><a href="#port" @click="aberto = false"><span>portifólio</span></a></li>
                <li><a href="#cont" @click="aberto = false"><span>contate me</span></a></li>
            </ul>
            <div v-bind:class="{ 'social-aberto': abertoSocial }" class="social">
                <a :href="behance" target="_blank">
                    <div class="item-social">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_62)">
                                <path
                                    d="M0 19.6953V31.8828L6.58594 31.8516C13.5156 31.8203 13.6406 31.8125 15.0938 31.4453C15.8516 31.25 17.0781 30.6172 17.6953 30.1016C18.9297 29.0625 19.7812 27.625 20.1172 26.0156C20.2656 25.3203 20.2812 23.8984 20.1484 23.1562C19.8203 21.25 18.6875 19.8047 16.8984 18.9922L16.4844 18.8047L17.0156 18.4922C17.75 18.0469 18.5859 17.1953 18.8906 16.5625C19.6641 14.9766 19.6562 12.6016 18.8672 10.9766C17.9453 9.0625 15.9766 7.88281 13.2188 7.58593C12.7031 7.53125 10.2109 7.5 6.21094 7.5H0V19.6953ZM12.4219 11.9062C13.2734 12.0859 13.8125 12.3828 14.1172 12.8359C14.4453 13.3203 14.5312 13.6484 14.5312 14.3828C14.5312 15.5391 14.1016 16.2656 13.1953 16.6797C12.3281 17.0703 11.8438 17.1094 8.23438 17.1094H4.92188V14.4062V11.7031L8.38281 11.7422C11.1562 11.7734 11.9531 11.8047 12.4219 11.9062ZM12.8672 21.3438C13.5703 21.5547 13.9609 21.7891 14.3672 22.2344C14.8984 22.8125 15.0391 23.25 15.0312 24.2969C15.0078 26.2422 14.0703 27.2969 12.1328 27.5781C11.8359 27.6172 10.1016 27.6563 8.26562 27.6563H4.92188V24.4062V21.1641L8.69531 21.1953C11.8516 21.2188 12.5312 21.2422 12.8672 21.3438Z"
                                    fill="#FFFAFA" />
                                <path d="M25.5469 10.1562V11.6406H30.8594H36.1719V10.1562V8.67188H30.8594H25.5469V10.1562Z"
                                    fill="#FFFAFA" />
                                <path
                                    d="M29.6875 13.4453C26.1563 13.8047 23.375 16.0391 22.3907 19.2969C21.7422 21.4453 21.711 24.4609 22.3125 26.5312C22.9375 28.7031 24.0157 30.0469 26.0782 31.2187C27.8516 32.2344 30.3047 32.6953 32.4688 32.4297C34.836 32.1328 36.4141 31.4219 37.8125 30C38.7891 29.0156 39.461 27.9219 39.6797 26.9609L39.75 26.6406H37.2969H34.8438L34.5704 27.0625C34.0782 27.8359 33.3047 28.3437 32.2813 28.5625C30.2032 29 28.0157 28.1172 27.2422 26.5312C26.9766 25.9922 26.7188 25.0156 26.7188 24.5547V24.2187H33.375H40.0235L39.9766 22.7109C39.8985 20.125 39.5 18.6172 38.4766 17.0703C37.0157 14.8672 34.9766 13.7187 31.9922 13.4375C31.0235 13.3516 30.6407 13.3516 29.6875 13.4453ZM31.961 17.375C33.0704 17.6172 34.1016 18.3594 34.5313 19.25C34.7813 19.7656 35 20.5234 35 20.875V21.0937H30.8985H26.7969L26.8438 20.875C26.9766 20.2578 27.2266 19.5391 27.4375 19.1562C27.7579 18.5937 28.3907 17.9531 28.875 17.7109C29.6797 17.3047 30.961 17.1641 31.961 17.375Z"
                                    fill="#FFFAFA" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_62">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
                <a :href="gitHub" target="_blank">
                    <div class="item-social">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_78)">
                                <path
                                    d="M18.625 0.46875C10.7187 1.00781 3.85154 6.23438 1.16404 13.7734C0.74998 14.9141 0.367167 16.5 0.18748 17.7734C0.0077921 19 -0.00783291 21.6484 0.148417 22.8906C0.945292 29.2656 4.64061 34.8125 10.2031 37.9844C11.4844 38.7188 13.4687 39.5469 13.9765 39.5625C14.375 39.5703 14.7109 39.4063 14.8828 39.1172C15.0234 38.8828 15.0312 38.7266 15.0078 37.0313C15 36.0234 14.9844 35.1875 14.9765 35.1875C14.9687 35.1797 14.6797 35.2188 14.3359 35.2812C12.2812 35.6172 10.4531 35.1562 9.28904 33.9922C8.83592 33.5391 8.69529 33.3203 8.24217 32.3828C7.50779 30.8516 7.07811 30.2656 6.24998 29.6641C5.6406 29.2266 5.31248 28.8984 5.31248 28.7344C5.31248 28.3438 6.25779 28.2109 7.00779 28.5C7.98436 28.8672 8.63279 29.4297 9.34373 30.5156C10.3281 32.0078 11.5625 32.6719 13.1328 32.5547C13.7344 32.5078 14.9531 32.1719 15.0469 32.0234C15.0703 31.9766 15.1484 31.7266 15.2031 31.4688C15.3515 30.8438 15.7344 30.0547 16.0625 29.6875C16.375 29.3359 16.4062 29.3594 15.3906 29.2188C14.5859 29.1094 13.1875 28.75 12.5156 28.4844C9.68748 27.3672 8.05467 25.2812 7.44529 22.0078C7.24998 20.9609 7.24998 18.3906 7.44529 17.5781C7.72654 16.4141 8.24998 15.3516 8.96873 14.4688L9.30467 14.0547L9.18748 13.6875C8.78123 12.4297 8.82811 10.7969 9.31248 9.28125C9.46873 8.80469 9.49998 8.75781 9.73436 8.71094C10.5703 8.55469 12.4844 9.24219 14.2344 10.3203L15 10.7969L15.6797 10.6406C17.2734 10.2734 18.0078 10.1953 20 10.1953C22 10.1953 22.7265 10.2734 24.3203 10.6406L25.0078 10.7969L25.6094 10.4219C26.8047 9.67188 27.9844 9.11719 28.789 8.91406C29.4531 8.75 30.0312 8.67188 30.2812 8.71875C30.5 8.75781 30.539 8.8125 30.6875 9.28125C31.1328 10.6719 31.2109 12.4375 30.8672 13.5156L30.7031 14.0234L30.8594 14.2188C31.625 15.1641 32.2265 16.3203 32.5156 17.4141C32.7187 18.1797 32.7969 20.1328 32.664 21.2266C32.0859 25.9766 29.4844 28.5312 24.5312 29.2188C23.5937 29.3438 23.6094 29.3359 23.8828 29.6328C24.2422 30.0078 24.5859 30.6797 24.7812 31.375C24.9375 31.9531 24.9531 32.2031 24.9922 35.5078C25.0469 39.3516 25.0312 39.2734 25.5078 39.4688C25.875 39.625 26.3047 39.5703 27.0703 39.2656C29.789 38.2109 31.9297 36.8359 33.9765 34.8203C37.2344 31.6172 39.2812 27.4609 39.8515 22.8906C40.0078 21.6484 39.9922 19 39.8125 17.7734C38.4609 8.25 30.8203 1.125 21.2734 0.46875C20.0156 0.382812 19.9062 0.382812 18.625 0.46875Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_78">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
                <a :href="linkedin" target="_blank">
                    <div class="item-social">
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.07032 4.07813C6.00782 4.28125 4.8672 5.17188 4.38282 6.1875C4.02345 6.95313 3.91407 7.78125 4.07814 8.53906C4.25782 9.34375 4.54689 9.92188 5.03907 10.4531C7.4297 13.0234 11.6406 11.3672 11.6406 7.85156C11.6406 5.39844 9.47657 3.61719 7.07032 4.07813Z"
                                fill="white" />
                            <path
                                d="M26.4062 14.2969C26.0391 14.375 25.5703 14.5 25.3516 14.5703C24.0469 15.0234 22.7344 16.0234 22.0312 17.125L21.7188 17.5938L21.7031 16.125L21.6797 14.6484L18.5 14.625L15.3125 14.6094V25.3125V36.0156H18.6328H21.9531V30.2891C21.9531 24.5859 21.9922 23.6562 22.2344 22.6953C22.5234 21.5703 23.2109 20.6719 24.0781 20.2734C24.9688 19.8672 26.3984 19.8203 27.2969 20.1562C28.1641 20.4844 28.8125 21.2891 29.0938 22.3906C29.3281 23.3047 29.375 24.5703 29.375 30.25V35.9375H32.6953H36.0156V29.7031C36.0156 23.2578 35.9688 21.8359 35.6953 20.3125C35.0547 16.6797 33.2109 14.7578 29.8672 14.2578C28.8125 14.1016 27.2422 14.1172 26.4062 14.2969Z"
                                fill="white" />
                            <path d="M4.53125 25.3125V36.0156H7.85156H11.1719V25.3125V14.6094H7.85156H4.53125V25.3125Z"
                                fill="white" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'MenuApp',
    components: {

    },
    data() {
        return {
            behance: "https://www.behance.net/marcosribeiro67",
            gitHub: "https://github.com/V1ntag3",
            linkedin: "https://www.linkedin.com/in/marcos-vin%C3%ADcius-ribeiro-alencar/",
            aberto: false,
            abertoSocial: false
        }
    },
    methods: {
        abrirMenu() {
            this.aberto = this.aberto == true ? false : true

            if (this.abertoSocial == true) {
                this.abertoSocial = false
            } else {

                setTimeout(() => {
                    this.abertoSocial = true
                }, 200);
            }
            console.log(this.aberto)
        }
    }
}
</script>
  
<style>
.menu {
    position: absolute;
    top: 50px;
    left: 35px;
    width: 50px;
    height: 50px;
    z-index: 4;
    cursor: pointer;
}

.line {
    display: block;
    border-radius: 10px;
    background-color: #fff;
    transition: 0.5s;
}

.line-one {
    width: 40px;
    height: 3px;
}

.line-two {
    margin-top: 12px;
    width: 35px;
    height: 3px;
}

.line-one-aberto {
    width: 40px;
    height: 3px;
    rotate: -45deg
}

.line-two-aberto {
    margin-top: -2px;
    width: 40px;
    height: 3px;
    rotate: 45deg;
}

.menu-opcoes {
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 0px;
    max-height: 0px;
    width: 0px;
    height: 0px;
    transition: 0.5s all;
    padding: 0px;

}

.menu-opcoes-aberto {
    position: absolute;

    max-width: 460px;
    max-height: 535px;
    width: 100%;
    height: 100%;
    padding: 50px;
    padding-top: 70px;
    background-color: #070707;
    z-index: 3;
}

.opcoes {
    font-size: 24px;
    color: white;
    font-weight: 700;
    display: none;
    opacity: 0;
    text-align: right;
    transition: 1s;
}

.opcoes li {
    margin-bottom: 15px;
    cursor: pointer;
    font-family: 'Poppins-Bold';
}

li span {
    transition: 0.5s;
}

li span:hover {
    opacity: 0.5;
}

li a {
    color: white;
    text-decoration: none;

}

.opcoes-aberto {
    display: unset;
    opacity: 1;

}

.social {
    margin-top: 0px;
    opacity: 0;
    transition: 1s;

    width: 330px;

}

.social-aberto {
    margin-top: 100px;
    width: 100%;
    opacity: 1;
}

.item-social {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-grid;
    margin: 0px 30px;
    transition: 0.5s;
    padding: 5PX;

}

.item-social:hover {
    background-color: white;
}

svg {
    padding: 5px;
}

svg path {
    transition: 0.5s
}

.item-social:hover svg path {
    fill: black !important;
}

@media (max-width:570px) {
    .menu-opcoes-aberto {
        max-width: calc(100% - 40px);
        max-height: calc(100vh - 40px);
        width: 100%;
        height: 100%;
    }

    .item-social {
        margin: 0px 10px;
    }

    .social {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0px;
    }

    .opcoes-aberto {
        width: calc(100% - 100px);
        height: calc(100vh - 210px);
        position: absolute;
        bottom: 45px;
    }

}
</style>
  