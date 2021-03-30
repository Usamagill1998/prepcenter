<template>
 <div>
   <header class="top-border top-transparent wow fadeInDown header-logo-top">
    <div class="top-bar-right d-flex align-items-center text-md-left">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 d-flex col-6">
            <a class="navbar-brand" href="#">
              <img :src="'http://prepcenter.techhivedemo.xyz/'+this.$store.state.userManagement.settings.logo"  alt="">
            </a>  
          </div>
          <div class="col-auto ml-auto pr-sm-0">
            
            <div class="d-inline-flex">
              <div class="top-text">
                  <small class="txt-ligt-gray">Address</small>
                  <span class="fw-7 txt-blue">                            {{this.$store.state.userManagement.settings.address}}
</span>
              </div>            
              <div class="top-text">
                  <small class="txt-ligt-gray">Email Us</small>
                  <span class="fw-6 txt-blue"><a href="#" class="txt-blue">                                {{this.$store.state.userManagement.settings.email}}
</a></span>
              </div>
              <div class="top-text">
                  <small class="txt-ligt-gray">Phone Number</small>
                  <span class="fw-7 txt-blue">{{this.$store.state.userManagement.settings.phone_no}}  </span>
              </div>  

              <!-- Topbar Language Dropdown Start -->
              <div class="dropdown d-inline-flex lang-toggle shadow-sm order-lg-last">
                <a href="#" class="dropdown-toggle btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
                  <img src="./images/us.svg" alt="" class="dropdown-item-icon"> 
                  <span class="d-inline-block d-lg-none">US</span>
                  <span class="d-none d-lg-inline-block">United States</span> <i class="icofont-rounded-down"></i>
                </a>
                <div class="dropdown-menu dropdownhover-bottom dropdown-menu-right" role="menu">
                  <a class="dropdown-item active" href="#">English</a>
                  <a class="dropdown-item" href="#">Deutsch</a>
                  <a class="dropdown-item" href="#">Español&lrm;</a>
                </div>
              </div>            
              <!-- Topbar Language Dropdown End -->        
                   
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Navigation Start -->
    <!-- Main Navigation Start -->
    <nav class="navbar navbar-expand-lg bg-transparent header-fullpage" style="z-index:1;">
      <div class="container text-nowrap bdr-nav px-0">
        <span class="order-lg-last d-inline-flex request-btn">
<!--            <a class="nav-link mr-2 ml-auto" href="#" id="search_home"><i class="icofont-search"></i></a>-->
             <button @click="logout" class="btn-theme icon-left bg-orange no-shadow d-lg-inline-block align-self-center" href="#" role="button" data-toggle="modal" data-target="#request_popup">Logout</button>
        </span>
        

              
        <!-- Topbar Request Quote Start -->
        
        <!-- Toggle Button Start -->
        <button class="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <!-- Toggle Button End -->

        <!-- Topbar Request Quote End -->

        <div class="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
          <ul class="navbar-nav mr-auto">
            
               <li class="nav-item">
                 <a class="nav-link" href="#">Home</a>
              </li>
                <li class="nav-item"  v-for="item in this.$store.state.userManagement.pages"  
    :key="item.id">   
                <a class="nav-link" href="#">{{item.name}}</a>
              </li>
              <!-- <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Case Studies</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
              </li> --> 

          </ul>
          <!-- Main Navigation End -->
        </div>


      </div>
    </nav>
    <!-- Main Navigation End -->
    <!-- Main Navigation End -->
  </header>
      <div class="slider bg-navy-blue">
      <div style="margin:0px auto;background-color:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
        <div  class="rev_slider fullscreenbanner" > 
    <b-carousel 
    
    id="carousel-interval"
    controls
    indicators
    :interval="400"
  >
    <b-carousel-slide style="height:530px"
    v-for="item in this.$store.state.userManagement.users"  
    :key="item.id"
    v-bind:img-src="'http://prepcenter.techhivedemo.xyz/'+item.image" />
    </b-carousel>
    </div> 
    </div>
    </div>

   
 
<!--   Fullscreen Slider Start-->
<!--  <div class="slider bg-navy-blue">-->
<!--    <div id="rev_slider_1078_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="classic4export" data-source="gallery" style="margin:0px auto;background-color:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">-->
<!--      &lt;!&ndash; START REVOLUTION SLIDER 5.4.1 fullwidth mode &ndash;&gt;-->
<!--      <div id="rev_slider_1078_1" class="rev_slider fullscreenbanner" style="display:none;" data-version="5.4.1">-->
<!--        <ul>-->
<!--          <li-->
<!--            data-index="rs-82"-->
<!--            data-transition="fade"-->
<!--            data-slotamount="default"-->
<!--            data-hideafterloop="0"-->
<!--            data-hideslideonmobile="off"-->
<!--            data-easein="Power4.easeOut"-->
<!--            data-easeout="Power4.easeOut"-->
<!--            data-masterspeed="1000"-->
<!--            data-thumb="http://www.mannatstudio.com/"-->
<!--            data-rotate="0"-->
<!--            data-saveperformance="off"-->
<!--            data-title="Slide"-->
<!--            data-param1=""-->
<!--            data-param2=""-->
<!--            data-param3=""-->
<!--            data-param4=""-->
<!--            data-param5=""-->
<!--            data-param6=""-->
<!--            data-param7=""-->
<!--            data-param8=""-->
<!--            data-param9=""-->
<!--            data-param10=""-->
<!--            data-description=""-->
<!--            data-slicey_shadow="0px 0px 50px 0px transparent"-->
<!--          >-->
<!--          &lt;!&ndash; MAIN IMAGE &ndash;&gt;-->
<!--          <img src="./images/banner_slider_4.jpg"  alt=""-->
<!--            data-bgposition="center center"-->
<!--            data-kenburns="on"-->
<!--            data-duration="7000"-->
<!--            data-ease="Linear.easeNone"-->
<!--            data-scalestart="100"-->
<!--            data-scaleend="150"-->
<!--            data-rotatestart="0"-->
<!--            data-rotateend="0"-->
<!--            data-blurstart="0"-->
<!--            data-blurend="0"-->
<!--            data-offsetstart="0 0"-->
<!--            data-offsetend="0 0"-->
<!--            class="rev-slidebg"-->
<!--            data-no-retina-->
<!--          >-->
<!--          &lt;!&ndash; LAYERS &ndash;&gt;-->

<!--          &lt;!&ndash; LAYER NR. 1 &ndash;&gt;-->
<!--          <div class="tp-caption tp-resizeme NotGeneric-Title"-->

<!--            id="slide-82-layer-2"-->

<!--            data-blendmode=”color-dodge“-->
<!--            data-x="['center','center','center','center']"-->
<!--            data-hoffset="['0','0','0','0']"-->
<!--            data-y="['middle','middle','middle','middle']"-->
<!--            data-voffset="['-160','-70','-70','-70']"-->
<!--            data-fontsize="['70','60','60','55']"-->
<!--            data-lineheight="['80','70','70','40']"-->
<!--            data-width="none"-->
<!--            data-height="none"-->
<!--            data-whitespace="nowrap"-->
<!--            data-type="text"-->
<!--            data-responsive_offset="on"-->
<!--            data-frames='[{"delay":200,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'-->
<!--            data-textAlign="['inherit','inherit','inherit','inherit']"-->
<!--            data-paddingtop="[0,0,0,0]"-->
<!--            data-paddingright="[0,0,0,0]"-->
<!--            data-paddingbottom="[0,0,0,0]"-->
<!--            data-paddingleft="[0,0,0,0]"-->
<!--            >We Are LogZee</div>-->

<!--            &lt;!&ndash; LAYER NR. 11 &ndash;&gt;-->
<!--            <div class="tp-caption medium_light_white tp-resizeme"-->
<!--            id="slide-82-layer-3"-->

<!--            data-blendmode=”color-dodge“-->
<!--            data-x="['center','center','center','center']"-->
<!--            data-hoffset="['0','0','0','0']"-->
<!--            data-y="['middle','middle','middle','middle']"-->
<!--            data-voffset="['-90','-10','-10','-10']"-->
<!--            data-width="none"-->
<!--            data-height="none"-->
<!--            data-whitespace="nowrap"-->
<!--            data-type="text"-->
<!--            data-responsive_offset="on"-->
<!--            data-frames='[{"delay":500,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'-->
<!--            data-textAlign="['inherit','inherit','inherit','inherit']"-->

<!--            data-paddingtop="[0,0,0,0]"-->
<!--            data-paddingright="[0,0,0,0]"-->
<!--            data-paddingbottom="[0,0,0,0]"-->
<!--            data-paddingleft="[0,0,0,0]"-->

<!--            data-fontsize="['28','28','28','28']"-->
<!--            data-lineheight="['34','34','34','50']"-->

<!--            >From Pickup to Destination</div>-->

<!--            &lt;!&ndash; LAYER NR. 12 &ndash;&gt;-->
<!--            <div class="tp-caption tp-resizeme small_light_white "-->
<!--            id="slide-82-layer-4"-->
<!--            data-x="['center','center','center','center']"-->
<!--            data-hoffset="['0','0','0','0']"-->
<!--            data-y="['middle','middle','middle','middle']"-->
<!--            data-voffset="['-30','60','60','60']"-->
<!--            data-width="none"-->
<!--            data-height="none"-->
<!--            data-whitespace="nowrap"-->

<!--            data-type="text"-->
<!--            data-responsive_offset="on"-->

<!--            data-frames='[{"delay":600,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'-->
<!--            data-textAlign="['inherit','inherit','inherit','inherit']"-->
<!--            data-paddingtop="[0,0,0,0]"-->
<!--            data-paddingright="[0,0,0,0]"-->
<!--            data-paddingbottom="[0,0,0,0]"-->
<!--            data-paddingleft="[0,0,0,0]"-->

<!--            data-fontsize="['16','16','16','13']"-->
<!--            data-lineheight="['30','30','30','20']"-->

<!--            >We deliver your products on time with pure safety. Sed ut perspiciatis unde<br> omnis iste natus error sit voluptatem accusantium doloremque laudantium,</div>-->

<!--            &lt;!&ndash; LAYER NR. 12 &ndash;&gt;-->
<!--            <div class="tp-caption tp-resizeme btn-theme bg-navy-blue rev-btn"-->
<!--            id="slide-82-layer-5"-->
<!--            data-x="['center','center','center','center']"-->
<!--            data-hoffset="['0','0','0','0']"-->
<!--            data-y="['middle','middle','middle','middle']"-->
<!--            data-voffset="['45','140','140','140']"-->
<!--            data-width="none"-->
<!--            data-height="none"-->
<!--            data-whitespace="nowrap"-->

<!--            data-type="text"-->
<!--            data-responsive_offset="on"-->

<!--            data-frames='[{"delay":750,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'-->
<!--            data-textAlign="['inherit','inherit','inherit','inherit']"-->

<!--            data-paddingtop="[0,0,0,0]"-->
<!--            data-paddingright="[30,30,30,30]"-->
<!--            data-paddingbottom="[0,0,0,0]"-->
<!--            data-paddingleft="[30,30,30,30]"-->

<!--            data-fontsize="['14','14','14','14']"-->
<!--            data-lineheight="['16','16','16','16']"-->

<!--            >Learn More <i class="icofont-rounded-right"></i></div>-->
<!--          </li>-->
<!--          &lt;!&ndash; SLIDE  &ndash;&gt;-->
<!--          <li data-index="rs-3045" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="rev-slider/assets/./images/datcolor-100x50.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">-->
<!--            &lt;!&ndash; MAIN IMAGE &ndash;&gt;-->
<!--            <img src="./images/banner_slider_3.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>-->
<!--            &lt;!&ndash; LAYERS &ndash;&gt;-->

<!--            &lt;!&ndash; LAYER NR. 1 &ndash;&gt;-->
<!--            <div class="tp-caption NotGeneric-Title tp-resizeme"-->
<!--                id="slide-3-layer-1"-->
<!--                data-x="left" data-hoffset="60"-->
<!--                data-y="center" data-voffset="-120"-->
<!--                data-width="['auto','auto','auto','auto']"-->
<!--                data-height="['auto','auto','auto','auto']"-->
<!--                data-transform_idle="o:1;"-->

<!--                data-fontsize="['70','70','70','45']"-->

<!--                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"-->
<!--                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"-->
<!--                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"-->
<!--                data-start="700"-->
<!--                data-splitin="none"-->
<!--                data-splitout="none"-->
<!--                data-responsive_offset="on"-->


<!--                style="z-index: 1; white-space: nowrap;"><span class="slider-small">Ready For Any</span> <br>Obstacle-->
<!--            </div>-->

<!--            &lt;!&ndash; LAYER NR. 2 &ndash;&gt;-->
<!--            <div class="tp-caption NotGeneric-Title tp-resizeme"-->
<!--               id="slide-3-layer-2"-->
<!--                data-x="left" data-hoffset="60"-->
<!--                data-y="center" data-voffset="10"-->
<!--                data-width="['auto','auto','auto','auto']"-->
<!--                data-height="['auto','auto','auto','auto']"-->
<!--                data-transform_idle="o:1;"-->

<!--                data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"-->
<!--                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"-->
<!--                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"-->
<!--                data-start="1400"-->
<!--                data-splitin="none"-->
<!--                data-splitout="none"-->
<!--                data-responsive_offset="on"-->


<!--                style="z-index: 2; white-space: nowrap; font-size: 18px; line-height: 30px;">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br> lorem quis bibendum auctor, nisi elit consequat ipsum, nec <br>sagittis sem nibh id elit.-->
<!--            </div>-->

<!--            &lt;!&ndash; LAYER NR. 3 &ndash;&gt;-->
<!--            <div class="tp-caption BigBold-Button rev-btn "-->
<!--                id="slide-3-layer-3"-->
<!--                data-x="left" data-hoffset="60"-->
<!--                data-y="center" data-voffset="100"-->
<!--                data-width="['auto']"-->
<!--                data-height="['auto']"-->
<!--                data-transform_idle="o:1;"-->
<!--                data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"-->
<!--                data-style_hover="c:rgba(255, 255, 255, 1.00);bg:rgba(41, 46, 49, 0);bc:rgba(255, 255, 255, 1.00);cursor:pointer;"-->

<!--                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power3.easeInOut;"-->
<!--                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"-->
<!--                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"-->
<!--                data-start="2100"-->
<!--                data-splitin="none"-->
<!--                data-splitout="none"-->
<!--                data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'-->
<!--                data-responsive_offset="on"-->
<!--                data-responsive="off"-->

<!--                style="z-index: 3; white-space: nowrap; font-weight: 800;background-color:rgba(41, 46, 49, 1.00);border-color:rgba(255, 255, 255, 0);outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">READ MORE-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <div class="tp-bannertimer tp-bottom" style="height: 7px; background-color: rgba(255, 255, 255, 0.25);"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <!--   Fullscreen Slider End-->

  <!-- Main Body Content Start -->

  <main id="body-content" style="overflow-y: inherit;">
    <!-- Welcome To Cargo Start -->
    <section class="wide-tb-100 pt-0 bg-white home-welcome">
      <div class="container">
        <div class="row">

          <!-- Icon Box 7 -->
          <div class="col-md-3">   
           <div class="icon-box-7">
              <img src="./images/icon-box-six-1.jpg" alt="">
              <h3 class="h3-xs txt-blue">Ground<br>Delivery</h3>
              <a href="#" class="btn-arrow bg-navy-blue"><i class="icofont-swoosh-right"></i></a>
            </div>
            <p class="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
          <!-- Icon Box 7 -->

          <!-- Icon Box 7 -->
          <div class="col-md-3"> 
             <div class="icon-box-7">
              <img src="./images/icon-box-six-2.jpg" alt="">
              <h3 class="h3-xs txt-blue">AIR<br>DELIVERY</h3>
              <a href="#" class="btn-arrow bg-navy-blue"><i class="icofont-swoosh-right"></i></a>
            </div>
            <p class="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
          <!-- Icon Box 7 -->

          <!-- Icon Box 7 -->
          <div class="col-md-3">   
            <div class="icon-box-7">
              <img src="./images/icon-box-six-3.jpg" alt="">
              <h3 class="h3-xs txt-blue">Sea<br>Delivery</h3>
              <a href="#" class="btn-arrow bg-navy-blue"><i class="icofont-swoosh-right"></i></a>
            </div>
            <p class="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
          <!-- Icon Box 7 -->

          <!-- Icon Box 7 -->
          <div class="col-md-3">   
            <div class="icon-box-7">
              <img src="./images/icon-box-six-4.jpg" alt="">
              <h3 class="h3-xs txt-blue">Packaging &<br>Storage</h3>
              <a href="#" class="btn-arrow bg-navy-blue"><i class="icofont-swoosh-right"></i></a>
            </div>
            <p class="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
          <!-- Icon Box 7 -->

        </div>
      </div>
    </section>
    <!-- Welcome To Cargo End -->

    <!-- What Makes Us Special Start -->
    <section class="bg-light-gray wide-tb-100">
      <div  class="container pos-rel" v-for="item in sample"  
    :key="item.id" >
       <div v-html="item.content">
      </div>
      </div>
    </section>
    <!-- What Makes Us Special End -->

    <!-- Our Features Start -->
    <section class="bg-white wide-tb-100">
      <div class="container pos-rel">
        <div class="row">
          <!-- Heading Main -->
          <div class="col-sm-12">
            <h1 class="heading-main wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <span>Our Features</span>
              Why Choose Us
            </h1>
          </div>
          <!-- Heading Main -->

          
          <div class="col-12 col-lg-4">              
            <!-- Icon Box 2 -->
            <div class="icon-box-2 mb-4">
              <div class="media">
                  <div class="service-icon">
                      <i class="icofont-check-circled"></i>
                  </div>
                  <div class="service-inner-content media-body">
                      <h4 class="h4-md">Worldwide Locations</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                  </div>
              </div>
            </div>              
            <!-- Icon Box -->
            <!-- Icon Box 2 -->
            <div class="icon-box-2">
              <div class="media">
                  <div class="service-icon">
                      <i class="icofont-check-circled"></i>
                  </div>
                  <div class="service-inner-content media-body">
                      <h4 class="h4-md">Quality and Commitment</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                  </div>
              </div>
            </div>              
            <!-- Icon Box -->
          </div>

          <div class="col-12 col-lg-4"> 
            <img src="./images/truck_front.jpg" alt="">
          </div>

          <div class="col-12 col-lg-4">              
            <!-- Icon Box 2 -->
            <div class="icon-box-2 mb-4">
              <div class="media">
                  <div class="service-icon">
                      <i class="icofont-check-circled"></i>
                  </div>
                  <div class="service-inner-content media-body">
                      <h4 class="h4-md">24/7 Customer Support</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                  </div>
              </div>
            </div>              
            <!-- Icon Box -->
            <!-- Icon Box 2 -->
            <div class="icon-box-2">
              <div class="media">
                  <div class="service-icon">
                      <i class="icofont-check-circled"></i>
                  </div>
                  <div class="service-inner-content media-body">
                      <h4 class="h4-md">100% Safe Delivery</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                  </div>
              </div>
            </div>              
            <!-- Icon Box -->
          </div>
        </div>
        
      </div>
    </section>
    <!-- Our Features End -->

    <section class="pb-0" id="fba">
        <div class="text-center">
            <h1 id="heading"><b>Here's how FBA Prep Service UK<br/> supports business owners like you..</b></h1>
        </div>
          <div class="container pos-rel">
              <div class="row">

                  <div class="col-md-6 text-center">
                      <div  class="Wholesale">
                      <h3><b>Wholesale & Private Label</b></h3>
                      <p>We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.</p>
                          <div class="text-center">
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Pricing Plans</button>
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Lean More</button>
                          </div>
                      </div>

                  </div>

                  <div class="col-md-6">
                      <div>
                      <img src="./images/AwXEpQFHRX21hwqJe3FX_IMG_8465.jpg" />
                      </div>
                  </div>

              </div>
              <div class="one row">

                  <div class="col-md-6">
                      <div>
                          <img src="./images/M3lD6QjTmyhootTpb9zb_file.jpg" />
                      </div>
                  </div>
                  <div class="col-md-6 text-center">
                      <div  class="Wholesale">
                          <h3><b>Online Arbitrage</b></h3>
                          <p>We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.</p>
                          <div class="text-center">
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Pricing Plans</button>
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Lean More</button>
                          </div>
                      </div>

                  </div>

              </div>
              <div class="row">

                  <div class="col-md-6 text-center">
                      <div  class="Wholesale">
                          <h3><b>Forwarding</b></h3>
                          <p>We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.</p>
                          <div class="text-center">
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Pricing Plans</button>
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Lean More</button>
                          </div>
                      </div>

                  </div>

                  <div class="col-md-6">
                      <div>
                          <img src="./images/8osTBJBKRkurRL9W0rwQ_file.jpg" />
                      </div>
                  </div>

              </div>
              <div class="one row">

                  <div class="col-md-6">
                      <div>
                          <img src="./images/AWVVH1POTDyh8JfPLKnj_file.jpg" />
                      </div>
                  </div>
                  <div class="col-md-6 text-center">
                      <div  class="Wholesale">
                          <h3><b>Storage</b></h3>
                          <p>We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.</p>
                          <div class="text-center">
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Pricing Plans</button>
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Lean More</button>
                          </div>
                      </div>

                  </div>

              </div>
              <div class="row" id="brands">

                  <div class="col-md-6 text-center">
                      <div  class="Wholesale">
                          <h3><b>Exclusive Brands</b></h3>
                          <p>We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.We can support your Wholesale & Private business by receiving, verification of your orders and then ship pallets at scale direct to Amazon's fulfilment centers.</p>
                          <div class="text-center">
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Pricing Plans</button>
                              <button type="submit" class="form-btn mx-auto btn-theme bg-orange">Lean More</button>
                          </div>
                      </div>

                  </div>

                  <div class="col-md-6">
                      <div>
                          <img src="./images/91V8QUNRkmajSddCBxGA_file.jpg" />
                      </div>
                  </div>

              </div>
          </div>
      </section>

    <!-- Client Reviews Start -->
    <section class="wide-tb-100 mb-spacer-md">
      <div class="container">
        <div class="row">
            <!-- Heading Main -->
            <div class="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h1 class="heading-main">
                <span>What Our</span>
                Customers Saying
              </h1>
            </div>
            <!-- Heading Main -->
            <div class="col-sm-12">
              <div class="owl-carousel owl-theme" id="home-client-testimonials">

                <!-- Client Testimonials Slider Item -->
                <div class="item">
                  <div class="client-testimonial bg-wave">
                    <div class="media">
                        <div class="client-testimonial-icon rounded-circle bg-navy-blue">
                            <img src="./images/team_1.jpg" alt="">
                        </div>
                        <div class="client-inner-content media-body">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet, </p>
                            <footer class="blockquote-footer"><cite title="Source Title">John Gerry  Design Hunt</cite></footer>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Client Testimonials Slider Item -->

                <!-- Client Testimonials Slider Item -->
                <div class="item">
                  <div class="client-testimonial bg-wave">
                    <div class="media">
                        <div class="client-testimonial-icon rounded-circle bg-navy-blue">
                            <img src="./images/team_2.jpg" alt="">
                        </div>
                        <div class="client-inner-content media-body">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet, </p>
                            <footer class="blockquote-footer"><cite title="Source Title">John Gerry  Design Hunt</cite></footer>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Client Testimonials Slider Item -->

                <!-- Client Testimonials Slider Item -->
                <div class="item">
                  <div class="client-testimonial bg-wave">
                    <div class="media">
                        <div class="client-testimonial-icon rounded-circle bg-navy-blue">
                            <img src="./images/team_3.jpg" alt="">
                        </div>
                        <div class="client-inner-content media-body">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet, </p>
                            <footer class="blockquote-footer"><cite title="Source Title">John Gerry  Design Hunt</cite></footer>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Client Testimonials Slider Item -->

              </div>
            </div>
        </div>
      </div>        
    </section>
    <!-- Client Reviews End -->

    <!-- Google Map Start -->
    <section class="map-bg">
      <div class="contact-details row d-flex">
        <div class="col">
          <h4>Germany</h4>
          <p><i class="icofont-phone"></i> +1 (408) 786 - 5117</p>
          <div class="text-nowrap"><i class="icofont-email"></i> <a href="#">germany@logzee.com</a></div>
        </div>
        <div class="col">
          <h4>Spain</h4>
          <p><i class="icofont-phone"></i> +1 (408) 786 - 5117</p>
          <div class="text-nowrap"><i class="icofont-email"></i> <a href="#">spain@logzee.com</a></div>
        </div>
      </div>
      <div id="map-holder" class="pos-rel">
          <div id="map_extended">
              <p>This will be replaced with the Google Map.</p>
          </div>
      </div>
      <!-- Google Map Start -->
    </section> 

    </main>
    

  <!-- Main Footer Start -->
  <footer class="wide-tb-70 bg-sky-blue pb-0">
      <div class="container">
          <div class="row">

              <!-- Column First -->
              <div class="col-lg-3 col-md-6">
                  <div class="logo-footer">
                      <img src="./images/logo_footer.png" alt="">
                  </div>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                  <h3 class="footer-heading">We're Social</h3>
                  <div class="social-icons">
                      <a href="https://www.facebook.com/salman.furqan"><i class="icofont-facebook"></i></a>
                      <a href="#"><i class="icofont-twitter"></i></a>
                      <a href="#"><i class="icofont-whatsapp"></i></a>
                      <a href="#"><i class="icofont-google-plus"></i></a>
                  </div>
              </div>
              <!-- Column First -->

              <!-- Column Second -->
              <div class="col-lg-3 col-md-6">
                  <h3 class="footer-heading">Quick Navigation</h3>
                  <div class="footer-widget-menu">
                      <ul class="list-unstyled">
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>Home</span></a></li>
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>About us</span></a></li>
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>News</span></a></li>
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>Services</span></a></li>
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>Contacts</span></a></li>
                          <li><a href="#"><i class="icofont-simple-right"></i> <span>Support</span></a></li>
                      </ul>
                  </div>
              </div>
              <!-- Column Second -->

               <!-- Column Third -->
              <div class="col-lg-3 col-md-6">
                  <h3 class="footer-heading">Get In Touch</h3>
                  <div class="footer-widget-contact">
                      <div class="media mb-3">
                          <i class="icofont-google-map mr-3"></i>
                          <div class="media-body">
                            
                            {{this.$store.state.userManagement.settings.address}}
                              
                              
                              
                              </div>
                      </div>
                      <div class="media mb-3">
                          <i class="icofont-smart-phone mr-3"></i>
                          <div class="media-body">
                              <div> {{this.$store.state.userManagement.settings.phone_no}}
 </div>
                              <!-- <div>+1 (408) 786 - 5227  </div> -->
                          </div>
                      </div>
                      <div class="media mb-3">
                          <i class="icofont-ui-email mr-3"></i>
                          <div class="media-body">
                              <div><a href="#">
                                {{this.$store.state.userManagement.settings.email}}
                                </a></div>
                              <!-- <div><a href="#">support@logzee-team.com</a></div> -->
                          </div>
                      </div>
                      <div class="media mb-3">
                          <i class="icofont-clock-time mr-3"></i>
                          <div class="media-body">
                              <div><strong>Mon - Fri</strong></div>
                              <div>10:00 Am - 6:00 PM EST</div>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- Column Third -->

              <!-- Column Fourth -->
              <div class="col-lg-3 col-md-6">
                  <h3 class="footer-heading">Recent Tweets</h3>
                  <div class="footer-widget-tweet">
                      <div class="d-flex align-items-start">
                          <i class="icofont-twitter txt-ligt-gray icofont-2x"></i>
                          <div class="tweet-stream"><ul class="tweet_list"><li class="tweet_first tweet_odd"><span class="tweet_text">It's Black History Month in the US &amp; Canada. To recognize the occasion we're talking  about the importance of diver… <a href="https://twitter.com/i/web/status/1359121374451814402">twitter.com/i/web/status/1…</a></span><span class="tweet_time"><a href="http://twitter.com/envato/status/1359121374451814402" title="view tweet on twitter">about 6 days ago</a></span></li></ul></div>
                      </div>

                      <div>
                          <a href="#" class="btn-theme icon-left"><i class="icofont-twitter"></i> Follow @twitter</a>
                      </div>
                  </div>
              </div>
              <!-- Column Fourth -->



          </div>
      </div>

      <div class="copyright-wrap bg-navy-blue wide-tb-30">
          <div class="container">
              <div class="row text-md-left text-center">
                  <div class="col-sm-12 col-md-6 copyright-links">
                      <a href="#">Privacy Policy</a>   <span>|</span>   <a href="#">CONTACT</a>   <span>|</span>   <a href="#">FAQS</a>
                  </div>
                  <div class="col-sm-12 col-md-6 text-md-right text-center">
                      Designed by <a href="#" rel="nofollow">MannatStudio</a> © 2019 All Rights Reserved
                  </div>
              </div>
          </div>
      </div>
  </footer>
  <!-- Main Footer End -->

  <!-- Search Popup Start -->
  <div class="overlay overlay-hugeinc">    
    <form class="form-inline mt-2 mt-md-0">
      <div class="form-inner">
        <div class="form-inner-div d-inline-flex align-items-center no-gutters">
          <div class="col-md-1">
            <i class="icofont-search"></i>
          </div> 
          <div class="col-10">
            <input class="form-control w-100 p-0" type="text" placeholder="Search" aria-label="Search">
          </div>
          <div class="col-md-1">
            <a href="#" class="overlay-close link-oragne"><i class="icofont-close-line"></i></a>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!-- Search Popup End -->

  <!-- Request Modal -->
  <div class="modal fade" id=request_popup tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered request_popup" role="document">
      <div class="modal-content">
        <div class="modal-body p-0">
          <!-- Contact Details Start -->
          <section class="pos-rel bg-light-gray">
            <div class="container-fluid p-0">
              <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="icofont-close-line"></i>
                </a>
              <div class="d-lg-flex justify-content-end no-gutters mb-spacer-md" style="box-shadow: 0px 18px 76px 0px rgba(0, 0, 0, 0.06);">
                <div class="col bg-fixed bg-img-7 request_pag_img">
                    &nbsp;
                </div>


                <div class="col-md-7 col-12">
                    <div class="px-3 m-5">
                      <h2 class="h2-xl mb-4 fw-6">Request A Quote</h2>                       
                      <form action="#" method="post" novalidate="novalidate" class="rounded-field">
                          
                          <div class="form-row mb-4">
                            <div class="col">
                              <select title="Please choose a package" required="" name="package" class="custom-select" aria-required="true" aria-invalid="false">
                                  <option value="">Freight Type</option>
                                  <option value="Type 1">Type 1</option>
                                  <option value="Type 2">Type 2</option>
                                  <option value="Type 3">Type 3</option>
                                  <option value="Type 4">Type 4</option>
                              </select>
                            </div>
                            <div class="col">
                              <select title="Please choose a package" required="" name="package" class="custom-select" aria-required="true" aria-invalid="false">
                                  <option value="">Incoterms</option>
                                  <option value="Type 1">Type 1</option>
                                  <option value="Type 2">Type 2</option>
                                  <option value="Type 3">Type 3</option>
                                  <option value="Type 4">Type 4</option>
                              </select>
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col">
                              <input type="text" name="name" class="form-control" placeholder="City of departure">
                            </div>
                            <div class="col">
                              <input type="text" name="email" class="form-control" placeholder="Delivery city">
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col">
                              <input type="text" name="name" class="form-control" placeholder="Total gross weight (KG)">
                            </div>
                            <div class="col">
                              <input type="text" name="email" class="form-control" placeholder="Dimension">
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="col">
                              <div class="center-head"><span class="bg-light-gray txt-orange">Your Personal Details</span></div>
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col">
                              <input type="text" name="name" class="form-control mb-3" placeholder="Your Name">
                              <input type="text" name="name" class="form-control mb-3" placeholder="Email">
                              <input type="text" name="name" class="form-control" placeholder="Phone Number">
                            </div>
                            <div class="col">
                              <textarea rows="7" placeholder="Message" class="form-control"></textarea>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col pt-3">
                              <button type="submit" class="form-btn btn-theme bg-orange">Send Message <i class="icofont-rounded-right"></i></button>
                            </div>
                          </div>
                      </form>        
                    </div>  
                </div>
              </div>
            </div>        
          </section>
          <!-- Contact Details End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Request Modal -->

  <!-- Back To Top Start -->
  <a id="mkdf-back-to-top" href="#" class="off"><i class="icofont-rounded-up"></i></a>
 </div>
  <!-- Request Modal -->

  <!-- Back To Top Start -->
  
  <!-- Back To Top End -->

</template>

<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
import moduleCalendar from '@/store/calendar/moduleCalendar.js'
require('vue-simple-calendar/static/css/default.css')
import { BCarousel, BCarouselSlide} from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'


export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker,
    BCarousel,
    BCarouselSlide,
  },
  data () {
    return {
      sample:[],
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',

      langHe: he,
      langEn: en,

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendarViewTypes: [
        {
          label: 'Month',
          val: 'month'
        },
        {
          label: 'Week',
          val: 'week'
        },
        {
          label: 'Year',
          val: 'year'
        }
      ]
    }
  },
  computed: {

    usersData () {
      return this.$store.state.userManagement.users,
      
      console.log(this.$store.state.userManagement.users)
    },


    simpleCalendarEvents () {
      return this.$store.state.calendar.events
    },
    validForm () {
      return this.title !== '' && this.startDate !== '' && this.endDate !== '' && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 && !this.errors.has('event-url')
    },
    disabledDatesTo () {
      return { to: new Date(this.startDate) }
    },
    disabledDatesFrom () {
      return { from: new Date(this.endDate) }
    },
    calendarLabels () {
      return this.$store.state.calendar.eventLabels
    },
    labelColor () {
      return (label) => {
        if      (label === 'business') return 'success'
        else if (label === 'work')     return 'warning'
        else if (label === 'personal') return 'danger'
        else if (label === 'none')     return 'primary'
      }
    },
    windowWidth () {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    logout(){
       if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken')
        this.$router.push('/pages/login').catch(() => {})
      }
    },
    addEvent () {
      const obj = { title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = `event-${  this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/addEvent', obj)
    },
    updateMonth (val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
    },
    clearFields () {
      this.title = this.endDate = this.url = ''
      this.id = 0
      this.labelLocal = 'none'
    },
    promptAddNewEvent (date) {
      this.disabledFrom = false
      this.addNewEventDialog(date)
    },
    addNewEventDialog (date) {
      this.clearFields()
      this.startDate = date
      this.endDate = date
      this.activePromptAddEvent = true
    },
    openAddNewEvent (date) {
      this.disabledFrom = true
      this.addNewEventDialog(date)
    },
    openEditEvent (event) {
      const e = this.$store.getters['calendar/getEvent'](event.id)
      this.id = e.id
      this.title = e.title
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.url = e.url
      this.labelLocal = e.label
      this.activePromptEditEvent = true
    },
    editEvent () {
      const obj = { id: this.id, title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = `event-${  this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/editEvent', obj)
    },
    removeEvent () {
      this.$store.dispatch('calendar/removeEvent', this.id)
    },
    eventDragged (event, date) {
      this.$store.dispatch('calendar/eventDragged', {event, date})
    }
  },
  created () {
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    } 
    // let payload = {
    //      token : activeUserInfo.token
    //   }
    			    		this.$vs.loading();
      this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
     this.$store.dispatch('userManagement/fetchCmsPages').then((res)=>{

      this.sample= res.data.data.pages
     }).catch(err => { console.error(err) })

      this.$store.dispatch('userManagement/fetchSettings').catch(err => { console.error(err) }).then(() => { 
                 this.$vs.loading.close() 
                 }).catch(error => {
          this.$vs.loading.close()
        })
		    	
      }, 
      
  beforeDestroy () {
    this.$store.unregisterModule('calendar')
  }
}
</script>

<style >
@import "./css/base.css";

    @import  "./css/custom.css";
   @import  "./rev-slider/revolution/fonts/font-awesome/css/font-awesome.css";
   @import "./rev-slider/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
   @import "./rev-slider/revolution/fonts/font-awesome/css/font-awesome.css";
    /* @import  "./rev-slider/revolution/css/settings.css"; */
   @import "./rev-slider/revolution/css/layers.css";
    @import "./rev-slider/revolution/css/navigation.css";

</style>
 