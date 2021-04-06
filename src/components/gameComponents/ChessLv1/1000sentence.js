function Sentences1000() {
    let arr = [
        {
            "VN": "Lái xe cẩn thận.",
            "EN": "Be careful driving.",
            "SortEN1": "B_ c_r___l driv_ng.",
            "SortEN2": "Be c_reful driving_"
        },
        {
            "VN": "Hãy cẩn thận.",
            "EN": "Be careful.",
            "SortEN1": "Be careful.",
            "SortEN2": "_e ___e____"
        },
        {
            "VN": "Bạn có thể dịch cho tôi cái này được không?",
            "EN": "Can you translate this for me?",
            "SortEN1": "_a_ you __ans_ate th_s _or me?",
            "SortEN2": "C_n y__ _ra____te ___s for ___"
        },
        {
            "VN": "Chicago rất khác Boston.",
            "EN": "Chicago is very different from Boston.",
            "SortEN1": "C_icag_ is _e_y _i__e__nt _rom _o_ton.",
            "SortEN2": "C__c_go _s _ery d_f_er___ f_om ____o__"
        },
        {
            "VN": "Đừng lo.",
            "EN": "Don't worry.",
            "SortEN1": "D_n'_ worry.",
            "SortEN2": "Do_'t worry."
        },
        {
            "VN": "Mọi người biết điều đó.",
            "EN": "Everyone knows it.",
            "SortEN1": "Ev_____e k_ow_ i_.",
            "SortEN2": "_v_r_o__ _no_s _t_"
        },
        {
            "VN": "Mọi thứ đã sẵn sàng.",
            "EN": "Everything is ready.",
            "SortEN1": "Ev_ryth__g __ r_ady.",
            "SortEN2": "Ev___th_ng i_ ____y."
        },
        {
            "VN": "Xuất sắc.",
            "EN": "Excellent.",
            "SortEN1": "Exce__e_t.",
            "SortEN2": "E_c_llen__"
        },
        {
            "VN": "Thỉnh thoảng.",
            "EN": "From time to time.",
            "SortEN1": "From __me t_ tim_.",
            "SortEN2": "_ro_ t__e _o tim_."
        },
        {
            "VN": "Ý kiến hay.",
            "EN": "Good idea.",
            "SortEN1": "Good idea_",
            "SortEN2": "G___ i__a."
        },
        {
            "VN": "Anh ta thích nó lắm.",
            "EN": "He likes it very much.",
            "SortEN1": "H_ l_ke_ it very _uch.",
            "SortEN2": "_e ____s i_ very _uc__"
        },
        {
            "VN": "Giúp tôi!",
            "EN": "Help!",
            "SortEN1": "H_lp!",
            "SortEN2": "H_l__"
        },
        {
            "VN": "Anh ta sắp tới.",
            "EN": "He's coming soon.",
            "SortEN1": "_e's co_ing s_on_",
            "SortEN2": "H_'s co_i_g s__n_"
        },
        {
            "VN": "Anh ta đúng.",
            "EN": "He's right.",
            "SortEN1": "He'_ _ig_t_",
            "SortEN2": "H_'s _ig_t."
        },
        {
            "VN": "Anh ta quấy rối quá.",
            "EN": "He's very annoying.",
            "SortEN1": "He's _ery annoyin_.",
            "SortEN2": "__'_ _er_ __noyi___"
        },
        {
            "VN": "Anh ta rất nổi tiếng.",
            "EN": "He's very famous.",
            "SortEN1": "He's very f_mous.",
            "SortEN2": "_e'_ ____ ___ou_."
        },
        {
            "VN": "Bạn khỏe không?",
            "EN": "How are you?",
            "SortEN1": "How are y___",
            "SortEN2": "How are y__?"
        },
        {
            "VN": "Việc làm thế nào?",
            "EN": "How's work going?",
            "SortEN1": "How's work g_ing?",
            "SortEN2": "H__'s ____ _oing_"
        },
        {
            "VN": "Nhanh lên!",
            "EN": "Hurry!",
            "SortEN1": "__r_y!",
            "SortEN2": "Hu__y!"
        },
        {
            "VN": "Tôi đã ăn rồi.",
            "EN": "I ate already.",
            "SortEN1": "_ at_ a_r_a_y.",
            "SortEN2": "_ ___ alrea__."
        },
        {
            "VN": "Tôi không thể nghe bạn nói.",
            "EN": "I can't hear you.",
            "SortEN1": "I can_t he_r _ou.",
            "SortEN2": "_ _a___ he__ ___."
        },
        {
            "VN": "Tôi không biết cách dùng nó.",
            "EN": "I don't know how to use it.",
            "SortEN1": "I d_n_t _n_w __w to _se it.",
            "SortEN2": "_ d_n't know h_w t_ us_ it_"
        },
        {
            "VN": "Tôi không thích anh ta.",
            "EN": "I don't like him.",
            "SortEN1": "I d_n't like _im.",
            "SortEN2": "_ d_n't __k_ h_m."
        },
        {
            "VN": "Tôi không thích nó.",
            "EN": "I don't like it.",
            "SortEN1": "I _on't like it.",
            "SortEN2": "_ _o_'_ l_ke i__"
        },
        {
            "VN": "Tôi không nói giỏi lắm",
            "EN": "I don't speak very well.",
            "SortEN1": "I don't speak very w___.",
            "SortEN2": "I d____ _pe_k ____ _el__"
        },
        {
            "VN": "Tôi không hiểu.",
            "EN": "I don't understand.",
            "SortEN1": "I do__t _n_e_stand.",
            "SortEN2": "I do_'t __de____nd."
        },
        {
            "VN": "Tôi không muốn nó.",
            "EN": "I don't want it.",
            "SortEN1": "I do_'t w___ _t.",
            "SortEN2": "_ do_'_ want it."
        },
        {
            "VN": "Tôi không muốn cái đó.",
            "EN": "I don't want that.",
            "SortEN1": "I do_'t w_n_ that_",
            "SortEN2": "I don'_ w__t t__t_"
        },
        {
            "VN": "Tôi không muốn làm phiền bạn.",
            "EN": "I don't want to bother you.",
            "SortEN1": "_ do_'t want _o _ot_er yo_.",
            "SortEN2": "I don__ want __ __ther you."
        },
        {
            "VN": "Tôi cảm thấy khỏe.",
            "EN": "I feel good.",
            "SortEN1": "I _eel good_",
            "SortEN2": "_ fe__ goo_."
        },
        {
            "VN": "Tôi xong việc lúc 6 giờ.",
            "EN": "I get off of work at 6.",
            "SortEN1": "_ get of_ of _ork at 6.",
            "SortEN2": "_ ge_ o_f _f __r_ a_ __"
        },
        {
            "VN": "Tôi bị nhức đầu.",
            "EN": "I have a headache.",
            "SortEN1": "I have a he_dache.",
            "SortEN2": "_ h_v_ _ h_a_ac___"
        },
        {
            "VN": "Tôi hy vọng bạn và vợ bạn có một chuyến đi thú vị.",
            "EN": "I hope you and your wife have a nice trip.",
            "SortEN1": "_ h_pe you __d _our wi_e _a_e a n_ce t_ip.",
            "SortEN2": "_ _op_ you _n_ y_ur wi__ ha_e a ____ tr___"
        },
        {
            "VN": "Tôi biết.",
            "EN": "I know.",
            "SortEN1": "I know_",
            "SortEN2": "I _no_."
        },
        {
            "VN": "Tôi thích cô ta.",
            "EN": "I like her.",
            "SortEN1": "I li__ he_.",
            "SortEN2": "_ l__e he_."
        },
        {
            "VN": "Tôi bị mất đồng hồ.",
            "EN": "I lost my watch.",
            "SortEN1": "I _ost m_ watc_.",
            "SortEN2": "_ l__t __ wa___."
        },
        {
            "VN": "Tôi yêu bạn.",
            "EN": "I love you.",
            "SortEN1": "_ love _o__",
            "SortEN2": "_ lov_ _ou_"
        },
        {
            "VN": "Tôi cần thay quần áo.",
            "EN": "I need to change clothes.",
            "SortEN1": "I need to ch__ge c_ot_es.",
            "SortEN2": "_ _e_d _o ______ _l_th_s."
        },
        {
            "VN": "Tôi cần về nhà.",
            "EN": "I need to go home.",
            "SortEN1": "I need to g_ hom_.",
            "SortEN2": "I _e_d to __ h__e."
        },
        {
            "VN": "Tôi chỉ cần món ăn nhẹ.",
            "EN": "I only want a snack.",
            "SortEN1": "I _nly want a s_ac__",
            "SortEN2": "I on__ wan_ _ ______"
        },
        {
            "VN": "Tôi nghĩ nó ngon.",
            "EN": "I think it tastes good.",
            "SortEN1": "_ think it tas_es g__d.",
            "SortEN2": "_ t_in_ i_ ta__es _ood."
        },
        {
            "VN": "Tôi nghĩ nó rất tốt.",
            "EN": "I think it's very good.",
            "SortEN1": "I th__k it's very g_od.",
            "SortEN2": "_ th_n_ i_'s _e_y g__d."
        },
        {
            "VN": "Tôi nghĩ quần áo rẻ hơn.",
            "EN": "I thought the clothes were cheaper.",
            "SortEN1": "I _h_ught the c_oth__ w_r_ _heape__",
            "SortEN2": "_ __o_g_t ___ ___thes w_r_ c_e___r."
        },
        {
            "VN": "Tôi sắp rời nhà hàng khi những người bạn của tôi tới.",
            "EN": "I was about to leave the restaurant when my friends arrived.",
            "SortEN1": "I w__ _bout to leave the ___t_u_an_ w_en my fri_n_s ar_ived.",
            "SortEN2": "_ was abou_ __ __ave t_e ___taur___ when my ___en_s _rr_ved_"
        },
        {
            "VN": "Tôi muốn đi dạo.",
            "EN": "I'd like to go for a walk.",
            "SortEN1": "I_d _ike to go for _ w_lk_",
            "SortEN2": "_'d li__ __ _o fo_ _ walk."
        },
        {
            "VN": "Nếu bạn cần tôi giúp đỡ, làm ơn cho tôi biết.",
            "EN": "If you need my help, please let me know.",
            "SortEN1": "If yo_ nee_ m_ help_ please let _e k_ow.",
            "SortEN2": "I_ y_u ne__ my h_l__ p_ea_e le_ m_ __ow_"
        },
        {
            "VN": "Tôi sẽ gọi bạn khi tôi ra đi.",
            "EN": "I'll call you when I leave.",
            "SortEN1": "_'_l call yo_ wh_n I le_v__",
            "SortEN2": "_'_l ca__ ___ ____ _ l__v_."
        },
        {
            "VN": "Tôi sẽ trở lại sau.",
            "EN": "I'll come back later.",
            "SortEN1": "I_ll c_me back la__r.",
            "SortEN2": "_'__ _om_ b_ck _ater."
        },
        {
            "VN": "Tôi sẽ trả.",
            "EN": "I'll pay.",
            "SortEN1": "I'll pay.",
            "SortEN2": "I'__ pay_"
        },
        {
            "VN": "Tôi sẽ mua nó.",
            "EN": "I'll take it.",
            "SortEN1": "I_l_ take it.",
            "SortEN2": "__l_ t_k_ _t_"
        },
        {
            "VN": "Tôi sẽ đưa bạn tới trạm xe buýt.",
            "EN": "I'll take you to the bus stop.",
            "SortEN1": "I'll t_ke __u to the bu_ __op.",
            "SortEN2": "__l_ ___e y__ __ _h_ _us st_p."
        },
        {
            "VN": "Tôi là một người Mỹ.",
            "EN": "I'm an American.",
            "SortEN1": "I'm a_ __e_ic_n_",
            "SortEN2": "_'_ an A_erican_"
        },
        {
            "VN": "Tôi đang lau chùi phòng.",
            "EN": "I'm cleaning my room.",
            "SortEN1": "I__ c__a_ing _y ro_m.",
            "SortEN2": "_'m cle_n_n_ my __om."
        },
        {
            "VN": "Tôi lạnh.",
            "EN": "I'm cold.",
            "SortEN1": "I'm cold.",
            "SortEN2": "_'_ __l_."
        },
        {
            "VN": "Tôi đang tới đón bạn.",
            "EN": "I'm coming to pick you up.",
            "SortEN1": "_'m co_ing __ pic_ __u _p.",
            "SortEN2": "I__ comi_g __ _ic_ y__ __."
        },
        {
            "VN": "Tôi sắp đi.",
            "EN": "I'm going to leave.",
            "SortEN1": "I__ g_ing t_ leav_.",
            "SortEN2": "___ g_i_g _o _e___."
        },
        {
            "VN": "Tôi khỏe, còn bạn?",
            "EN": "I'm good, and you?",
            "SortEN1": "__m goo_ __d you?",
            "SortEN2": "I__ g_od_ ___ y__?"
        },
        {
            "VN": "Tôi vui.",
            "EN": "I'm happy.",
            "SortEN1": "I'm _a_py.",
            "SortEN2": "_'m ___py_"
        },
        {
            "VN": "Tôi đói.",
            "EN": "I'm hungry.",
            "SortEN1": "I'm h_ngr_.",
            "SortEN2": "_'_ __ngry."
        },
        {
            "VN": "Tôi có gia đình.",
            "EN": "I'm married.",
            "SortEN1": "I_m __r__e__",
            "SortEN2": "_'_ m_____d."
        },
        {
            "VN": "Tôi không bận.",
            "EN": "I'm not busy.",
            "SortEN1": "_'_ not bu_y.",
            "SortEN2": "___ not _u_y_"
        },
        {
            "VN": "Tôi không có gia đình.",
            "EN": "I'm not married.",
            "SortEN1": "I_m no_ marr_ed.",
            "SortEN2": "I'm no_ _arried."
        },
        {
            "VN": "Tôi chưa sẵn sàng.",
            "EN": "I'm not ready yet.",
            "SortEN1": "I'm n_t ready ye_.",
            "SortEN2": "_'_ _o_ r__d_ ye__"
        },
        {
            "VN": "Tôi không chắc.",
            "EN": "I'm not sure.",
            "SortEN1": "I'm not sur_.",
            "SortEN2": "__m not __r_."
        },
        {
            "VN": "Tôi rất tiếc, chúng tôi hết hàng.",
            "EN": "I'm sorry, we're sold out.",
            "SortEN1": "I'm so_r_ we're so__ o_t.",
            "SortEN2": "_'m sor__ we're _ol_ ou_."
        },
        {
            "VN": "Tôi khát.",
            "EN": "I'm thirsty.",
            "SortEN1": "I'm _hir__y.",
            "SortEN2": "__m t___s_y."
        },
        {
            "VN": "Tôi rất bận. Bây giờ tôi không có thời gian.",
            "EN": "I'm very busy. I don't have time now.",
            "SortEN1": "I'm very bu_y. I don't have time now.",
            "SortEN2": "I__ ve_y _u_y. I don__ ____ _im_ n_w_"
        },
        {
            "VN": "Ông Smith có phải là người Mỹ không?",
            "EN": "Is Mr. Smith an American?",
            "SortEN1": "Is _r. Smi_h _n Ame_i_an?",
            "SortEN2": "_s M_. __i__ __ Ameri_a_?"
        },
        {
            "VN": "Như vậy đủ không?",
            "EN": "Is that enough?",
            "SortEN1": "_s _hat enough_",
            "SortEN2": "I_ t__t _n_u_h_"
        },
        {
            "VN": "Nó dài hơn 2 dặm.",
            "EN": "It's longer than 2 miles.",
            "SortEN1": "It_s lo_ge_ than 2 miles.",
            "SortEN2": "____ _on___ t_a_ _ m_le_."
        },
        {
            "VN": "Tôi đã ở đây 2 ngày.",
            "EN": "I've been here for two days.",
            "SortEN1": "I'v_ b_en here _or two days.",
            "SortEN2": "I'v_ be_n _er_ for _wo __y_."
        },
        {
            "VN": "Tôi đã nghe Texas là một nơi đẹp.",
            "EN": "I've heard Texas is a beautiful place.",
            "SortEN1": "I've hea_d Texas _s a be_ut_fu_ place.",
            "SortEN2": "I__e __ar_ Tex_s is a b__uti_ul _lac__"
        },
        {
            "VN": "Tôi chưa bao giờ thấy cái đó trước đây.",
            "EN": "I've never seen that before.",
            "SortEN1": "I've __ver see_ t_a_ befor_.",
            "SortEN2": "I_ve n_ve_ se__ ____ be_or_."
        },
        {
            "VN": "Một ít thôi.",
            "EN": "Just a little.",
            "SortEN1": "Ju_t _ _it_le.",
            "SortEN2": "_ust a litt__."
        },
        {
            "VN": "Chờ một chút.",
            "EN": "Just a moment.",
            "SortEN1": "_ust a moment.",
            "SortEN2": "J_st _ m_m_nt."
        },
        {
            "VN": "Để tôi kiểm tra.",
            "EN": "Let me check.",
            "SortEN1": "Let me check.",
            "SortEN2": "Le_ __ c__c__"
        },
        {
            "VN": "Để tôi suy nghĩ về việc đó.",
            "EN": "Let me think about it.",
            "SortEN1": "Let me th_nk _bout it.",
            "SortEN2": "L__ _e ___n_ a__u_ i_."
        },
        {
            "VN": "Chúng ta hãy đi xem.",
            "EN": "Let's go have a look.",
            "SortEN1": "L_t's _o ha_e _ look.",
            "SortEN2": "L____ __ __v_ a l_ok."
        },
        {
            "VN": "Chúng ta hãy thực hành tiếng Anh.",
            "EN": "Let's practice English.",
            "SortEN1": "Let'_ pra_t_ce _n_lis__",
            "SortEN2": "Le_'_ prac____ E_g_i___"
        },
        {
            "VN": "Tôi có thể nói với bà Smith không, xin vui lòng?",
            "EN": "May I speak to Mrs. Smith please?",
            "SortEN1": "May I speak to M_s. __i_h please_",
            "SortEN2": "M_y _ __e_k _o _rs. Smi_h _le_se?"
        },
        {
            "VN": "Hơn thế.",
            "EN": "More than that.",
            "SortEN1": "Mo__ th_n that_",
            "SortEN2": "Mo_e __an ___t."
        },
        {
            "VN": "Đừng bận tâm.",
            "EN": "Never mind.",
            "SortEN1": "Never min_.",
            "SortEN2": "__v_r m__d_"
        },
        {
            "VN": "Kỳ tới.",
            "EN": "Next time.",
            "SortEN1": "Ne__ ti_e_",
            "SortEN2": "N__t ____."
        },
        {
            "VN": "Không, cảm ơn.",
            "EN": "No, thank you.",
            "SortEN1": "No th_nk yo__",
            "SortEN2": "No ___nk __u_"
        },
        {
            "VN": "Không.",
            "EN": "No.",
            "SortEN1": "No.",
            "SortEN2": "__."
        },
        {
            "VN": "Vô lý.",
            "EN": "Nonsense.",
            "SortEN1": "Nonsens_.",
            "SortEN2": "____ens_."
        },
        {
            "VN": "Không phải lúc gần đây.",
            "EN": "Not recently.",
            "SortEN1": "_ot r_ce_tly.",
            "SortEN2": "N_t re_en_l_."
        },
        {
            "VN": "Chưa.",
            "EN": "Not yet.",
            "SortEN1": "No_ yet_",
            "SortEN2": "___ yet."
        },
        {
            "VN": "Không còn gì khác.",
            "EN": "Nothing else.",
            "SortEN1": "_oth__g else.",
            "SortEN2": "_o__ing else."
        },
        {
            "VN": "Dĩ nhiên.",
            "EN": "Of course.",
            "SortEN1": "Of cou__e_",
            "SortEN2": "O_ _o_rse."
        },
        {
            "VN": "Được.",
            "EN": "Okay.",
            "SortEN1": "O_ay.",
            "SortEN2": "Ok___"
        },
        {
            "VN": "Làm ơn điền vào đơn này.",
            "EN": "Please fill out this form.",
            "SortEN1": "_le_se f_ll out this f_r_.",
            "SortEN2": "Please _i_l o__ __is f_rm_"
        },
        {
            "VN": "Làm ơn đưa tôi tới địa chỉ này.",
            "EN": "Please take me to this address.",
            "SortEN1": "_lea_e ___e _e to this ___r__s.",
            "SortEN2": "____se t_ke _e _o th__ _d_re___"
        },
        {
            "VN": "Làm ơn viết ra giấy.",
            "EN": "Please write it down.",
            "SortEN1": "__e_s_ w_ite i_ down.",
            "SortEN2": "_le_s_ _rit_ __ d__n_"
        },
        {
            "VN": "Thực sao?",
            "EN": "Really?",
            "SortEN1": "R_al_y?",
            "SortEN2": "Re_____"
        },
        {
            "VN": "Ngay đây.",
            "EN": "Right here.",
            "SortEN1": "Rig_t _e_e.",
            "SortEN2": "Righ_ _ere."
        },
        {
            "VN": "Ngay đó.",
            "EN": "Right there.",
            "SortEN1": "R_g_t the__.",
            "SortEN2": "_ig_t t_____"
        },
        {
            "VN": "Gặp bạn sau.",
            "EN": "See you later.",
            "SortEN1": "__e y_u la___.",
            "SortEN2": "See _o_ ____r_"
        },
        {
            "VN": "Gặp bạn ngày mai.",
            "EN": "See you tomorrow.",
            "SortEN1": "See you tomor__w_",
            "SortEN2": "_ee _ou to__r__w_"
        },
        {
            "VN": "Gặp bạn tối nay.",
            "EN": "See you tonight.",
            "SortEN1": "See you tonigh_.",
            "SortEN2": "S__ yo_ _oni_ht_"
        },
        {
            "VN": "Cô ta đẹp.",
            "EN": "She's pretty.",
            "SortEN1": "She's pretty_",
            "SortEN2": "S_e_s pre_t_."
        },
        {
            "VN": "Xin lỗi làm phiền bạn.",
            "EN": "Sorry to bother you.",
            "SortEN1": "_or_y t_ bo_her _ou_",
            "SortEN2": "Sor__ __ __t_er y__."
        },
        {
            "VN": "Dừng lại!",
            "EN": "Stop!",
            "SortEN1": "__op!",
            "SortEN2": "_to__"
        },
        {
            "VN": "Thử vận may.",
            "EN": "Take a chance.",
            "SortEN1": "T_k_ a ch__ce.",
            "SortEN2": "___e _ _han_e_"
        },
        {
            "VN": "Mang nó ra ngoài.",
            "EN": "Take it outside.",
            "SortEN1": "Take it outside.",
            "SortEN2": "_a_e _t o_t_____"
        },
        {
            "VN": "Nói với tôi.",
            "EN": "Tell me.",
            "SortEN1": "__ll __.",
            "SortEN2": "Tel_ _e."
        },
        {
            "VN": "Cám ơn cô.",
            "EN": "Thank you miss.",
            "SortEN1": "Tha_k y_u miss.",
            "SortEN2": "Than_ _ou _iss_"
        },
        {
            "VN": "Cám ơn ông.",
            "EN": "Thank you sir.",
            "SortEN1": "T__n_ you sir_",
            "SortEN2": "_____ _o_ s__."
        },
        {
            "VN": "Cám ơn rất nhiều.",
            "EN": "Thank you very much.",
            "SortEN1": "Than_ _o_ v___ much_",
            "SortEN2": "_h_nk __u ve_y mu__."
        },
        {
            "VN": "Cám ơn.",
            "EN": "Thank you.",
            "SortEN1": "_ha_k ___.",
            "SortEN2": "Tha__ you."
        },
        {
            "VN": "Cám ơn về mọi việc.",
            "EN": "Thanks for everything.",
            "SortEN1": "Thanks f_r _ve_yt__ng_",
            "SortEN2": "T__n_s f_r e__ryth_ng_"
        },
        {
            "VN": "Cám ơn về sự giúp đỡ của bạn.",
            "EN": "Thanks for your help.",
            "SortEN1": "Thank_ for you_ _e__.",
            "SortEN2": "_hank_ _o_ _o__ __l_."
        },
        {
            "VN": "Cái đó trông tuyệt.",
            "EN": "That looks great.",
            "SortEN1": "That _ooks g_ea__",
            "SortEN2": "T_at loo_s g___t_"
        },
        {
            "VN": "Cái đó ngửi hôi.",
            "EN": "That smells bad.",
            "SortEN1": "Tha_ s_ells b_d.",
            "SortEN2": "That ___l__ b_d."
        },
        {
            "VN": "Được thôi.",
            "EN": "That's alright.",
            "SortEN1": "_hat's al_i_ht_",
            "SortEN2": "__at__ _l_i_ht_"
        },
        {
            "VN": "Như vậy đủ rồi.",
            "EN": "That's enough.",
            "SortEN1": "Tha__s enoug_.",
            "SortEN2": "_h____ _____h."
        },
        {
            "VN": "Như vậy tốt rồi.",
            "EN": "That's fine.",
            "SortEN1": "_h_t's fine.",
            "SortEN2": "Th_t's _in__"
        },
        {
            "VN": "Như vậy đó.",
            "EN": "That's it.",
            "SortEN1": "Th_t's __.",
            "SortEN2": "____'s it."
        },
        {
            "VN": "Như vậy không công bằng.",
            "EN": "That's not fair.",
            "SortEN1": "_h_t's no_ fai_.",
            "SortEN2": "____'s __t _a_r_"
        },
        {
            "VN": "Như vậy không đúng.",
            "EN": "That's not right.",
            "SortEN1": "That_s n_t ri_ht.",
            "SortEN2": "__at__ n__ ___ht."
        },
        {
            "VN": "Đúng rồi.",
            "EN": "That's right.",
            "SortEN1": "That_s r___t.",
            "SortEN2": "T_at_s r_g_t_"
        },
        {
            "VN": "Như vậy quá tệ.",
            "EN": "That's too bad.",
            "SortEN1": "That'_ _o_ bad_",
            "SortEN2": "___t_s __o _a__"
        },
        {
            "VN": "Như vậy nhiều quá.",
            "EN": "That's too many.",
            "SortEN1": "_hat's __o m_ny.",
            "SortEN2": "_h_t'_ __o _a_y_"
        },
        {
            "VN": "Như vậy nhiều quá.",
            "EN": "That's too much.",
            "SortEN1": "Th_t'_ to_ mu__.",
            "SortEN2": "_h__'_ t_o _____"
        },
        {
            "VN": "Quyển sách ở dưới cái bàn.",
            "EN": "The book is under the table.",
            "SortEN1": "_he book is under ___ _able.",
            "SortEN2": "T__ __o_ is _n_er _h_ _ab_e_"
        },
        {
            "VN": "Họ sẽ trở lại ngay.",
            "EN": "They'll be right back.",
            "SortEN1": "They'll be r_ght ba___",
            "SortEN2": "____'l_ be __gh_ _ack."
        },
        {
            "VN": "Chúng giống nhau.",
            "EN": "They're the same.",
            "SortEN1": "They'_e the s_m_.",
            "SortEN2": "T_e_'_e _h_ same_"
        },
        {
            "VN": "Họ rất bận.",
            "EN": "They're very busy.",
            "SortEN1": "___y_re ve_y b_sy_",
            "SortEN2": "T___'r_ ver_ bu_y."
        },
        {
            "VN": "Cái này không hoạt động.",
            "EN": "This doesn't work.",
            "SortEN1": "This _o_sn't wor__",
            "SortEN2": "__i_ does___ wo_k_"
        },
        {
            "VN": "Cái này rất khó.",
            "EN": "This is very difficult.",
            "SortEN1": "T_i_ is ve_y diff_cul_.",
            "SortEN2": "Th__ _s v_r_ d__f____t."
        },
        {
            "VN": "Điều này rất quan trọng.",
            "EN": "This is very important.",
            "SortEN1": "_his _s ve__ im_ortant.",
            "SortEN2": "Th__ __ _er_ i_p___ant_"
        },
        {
            "VN": "Thử nó.",
            "EN": "Try it.",
            "SortEN1": "Tr_ it.",
            "SortEN2": "Try _t_"
        },
        {
            "VN": "Rất tốt, cám ơn.",
            "EN": "Very good, thanks.",
            "SortEN1": "V_ry good thanks.",
            "SortEN2": "_ery __od tha__s."
        },
        {
            "VN": "Chúng tôi thích nó lắm.",
            "EN": "We like it very much.",
            "SortEN1": "W_ _i_e _t _ery much.",
            "SortEN2": "__ li_e _t _e__ m__h_"
        },
        {
            "VN": "Bạn nhận giùm một tin nhắn được không?",
            "EN": "Would you take a message please?",
            "SortEN1": "Wo_ld _ou take _ me_sage p_e_s__",
            "SortEN2": "__ul_ y_u _ak_ a ______e pl_a_e_"
        },
        {
            "VN": "Vâng, thực sự.",
            "EN": "Yes, really.",
            "SortEN1": "Yes really.",
            "SortEN2": "Ye__ r_al_y."
        },
        {
            "VN": "Tất cả đồ của bạn ở đây.",
            "EN": "Your things are all here.",
            "SortEN1": "_o__ t_ing_ are a_l h_re_",
            "SortEN2": "_o__ _h_ng_ __e a_l _ere_"
        },
        {
            "VN": "Bạn đẹp.",
            "EN": "You're beautiful.",
            "SortEN1": "You__e beau__ful.",
            "SortEN2": "_____e _eau_i_ul."
        },
        {
            "VN": "Bạn rất dễ thương.",
            "EN": "You're very nice.",
            "SortEN1": "You're very _ice.",
            "SortEN2": "Yo__r_ v_ry ni___"
        },
        {
            "VN": "Bạn rất thông minh.",
            "EN": "You're very smart.",
            "SortEN1": "Yo___e _ery s__rt_",
            "SortEN2": "You__e _er_ __art_"
        },
        {
            "VN": "Dĩ nhiên!",
            "EN": "Certainly!",
            "SortEN1": "Ce__ainly!",
            "SortEN2": "_er__i____"
        },
        {
            "VN": "Chào (buổi chiều)",
            "EN": "Good afternoon.",
            "SortEN1": "Go_d aft_rnoon.",
            "SortEN2": "Good _fte__o___"
        },
        {
            "VN": "Chào ông (buổi tối)",
            "EN": "Good evening sir.",
            "SortEN1": "Good ev__ing sir.",
            "SortEN2": "___d eve_ing sir_"
        },
        {
            "VN": "Chúc may mắn.",
            "EN": "Good Luck.",
            "SortEN1": "_o_d Luck.",
            "SortEN2": "____ __c__"
        },
        {
            "VN": "Chào (buổi sáng)",
            "EN": "Good morning.",
            "SortEN1": "Good m_rnin_.",
            "SortEN2": "Go__ _o_n_ng."
        },
        {
            "VN": "Tuyệt.",
            "EN": "Great.",
            "SortEN1": "Gre_t_",
            "SortEN2": "_re___"
        },
        {
            "VN": "Chúc mừng sinh nhật.",
            "EN": "Happy Birthday.",
            "SortEN1": "Hap_y Bi_th__y.",
            "SortEN2": "H__py __rt_day_"
        },
        {
            "VN": "Chúc một chuyến đi tốt đẹp.",
            "EN": "Have a good trip.",
            "SortEN1": "Have a _ood t__p.",
            "SortEN2": "__v_ _ _o__ __ip."
        },
        {
            "VN": "Chào.",
            "EN": "Hello.",
            "SortEN1": "Hel_o.",
            "SortEN2": "Hel_o_"
        },
        {
            "VN": "Rất vui được gặp bạn.",
            "EN": "Nice to meet you",
            "SortEN1": "_ice to meet y__",
            "SortEN2": "Ni_e to _e__ __u"
        },
        {
            "VN": "Làm ơn gọi cho tôi.",
            "EN": "Please call me.",
            "SortEN1": "Please call me.",
            "SortEN2": "Pl_a_e _all m_."
        },
        {
            "VN": "Vé một chiều.",
            "EN": "A one way ticket.",
            "SortEN1": "A on_ w__ t_cket.",
            "SortEN2": "A _n_ _a_ ___ket."
        },
        {
            "VN": "Vé khứ hồi.",
            "EN": "A round trip ticket.",
            "SortEN1": "A r_un_ trip ___ket_",
            "SortEN2": "A ___n_ trip _i_k_t_"
        },
        {
            "VN": "Khoảng 300 cây số.",
            "EN": "About 300 kilometers.",
            "SortEN1": "A__ut __0 kilo_eters.",
            "SortEN2": "__out 300 k_lo___e__."
        },
        {
            "VN": "Bạn sẽ giúp cô ta không?",
            "EN": "Are you going to help her?",
            "SortEN1": "Ar_ you g_ing to help _er?",
            "SortEN2": "_re _o_ go_ng to h_l_ ___?"
        },
        {
            "VN": "Lúc mấy giờ?",
            "EN": "At what time?",
            "SortEN1": "A_ wha_ time?",
            "SortEN2": "_t what _ime?"
        },
        {
            "VN": "Tôi có thể xin hẹn vào thứ tư tới không?",
            "EN": "Can I make an appointment for next Wednesday?",
            "SortEN1": "__n _ m__e an ap_ointment for ne__ W___esday_",
            "SortEN2": "C__ I __k_ a_ a_point____ __r ____ _e___sd__?"
        },
        {
            "VN": "Bạn có thể lập lại điều đó được không?",
            "EN": "Can you repeat that please?",
            "SortEN1": "C_n you __peat t___ ple___?",
            "SortEN2": "___ ___ _ep_at t_a_ ___a_e_"
        },
        {
            "VN": "Bạn có đủ tiền không?",
            "EN": "Do you have enough money?",
            "SortEN1": "Do you h_ve _no_g_ money_",
            "SortEN2": "Do y__ _a__ e_o_g_ _o__y?"
        },
        {
            "VN": "Bạn có biết nấu ăn không?",
            "EN": "Do you know how to cook?",
            "SortEN1": "D_ yo_ __o_ _ow _o c_ok?",
            "SortEN2": "Do __u __o_ h_w to c_o__"
        },
        {
            "VN": "Bạn có biết cái này nói gì không?",
            "EN": "Do you know what this says?",
            "SortEN1": "Do you k___ wha_ _h_s says_",
            "SortEN2": "D_ ___ kn__ wha_ th__ s____"
        },
        {
            "VN": "Bạn có muốn tôi tới đón bạn không?",
            "EN": "Do you want me to come and pick you up?",
            "SortEN1": "Do y__ want _e to __m_ an_ pick y_u _p?",
            "SortEN2": "_o y__ wa_t __ t_ come a__ pic_ you up_"
        },
        {
            "VN": "Con đường này có tới New York không?",
            "EN": "Does this road go to New York?",
            "SortEN1": "Does th_s ro_d _o to New Y_rk_",
            "SortEN2": "____ thi_ r__d __ t_ Ne_ Y____"
        },
        {
            "VN": "Theo tôi.",
            "EN": "Follow me.",
            "SortEN1": "F___ow m_.",
            "SortEN2": "_o_lo_ ___"
        },
        {
            "VN": "Từ đây đến đó.",
            "EN": "From here to there.",
            "SortEN1": "_rom here t_ the_e.",
            "SortEN2": "Fr_m _ere __ th____"
        },
        {
            "VN": "Đi thẳng trước mặt.",
            "EN": "Go straight ahead.",
            "SortEN1": "Go s_raight ahea_.",
            "SortEN2": "G_ _traigh_ ah___."
        },
        {
            "VN": "Bạn tới chưa?",
            "EN": "Have you arrived?",
            "SortEN1": "Hav_ yo_ arriv_d?",
            "SortEN2": "Ha__ y__ a__iv_d_"
        },
        {
            "VN": "Bạn từng tới Boston chưa?",
            "EN": "Have you been to Boston?",
            "SortEN1": "_ave you bee_ _o Bosto_?",
            "SortEN2": "_ave _ou ___n to __s_o_?"
        },
        {
            "VN": "Làm sao tôi tới đó?",
            "EN": "How do I get there?",
            "SortEN1": "How __ _ g_t t_ere_",
            "SortEN2": "__w _o _ ___ there_"
        },
        {
            "VN": "Làm sao tôi tới đường Daniel?",
            "EN": "How do I get to Daniel Street?",
            "SortEN1": "How _o I _e_ _o __niel _treet?",
            "SortEN2": "___ do _ _e_ t_ ______ S__eet?"
        },
        {
            "VN": "Làm sao tôi tới tòa đại sứ Mỹ?",
            "EN": "How do I get to the American Embassy?",
            "SortEN1": "How d_ _ get to the Ame__can Em_as___",
            "SortEN2": "H_w __ _ _et to __e _me_ic__ Em_a__y_"
        },
        {
            "VN": "Đi bằng xe mất bao lâu?",
            "EN": "How long does it take by car?",
            "SortEN1": "_ow _ong d___ it t_k_ by __r?",
            "SortEN2": "H__ l__g __e_ __ _a_e _y ___?"
        },
        {
            "VN": "Tới Georgia mất bao lâu?",
            "EN": "How long does it take to get to Georgia?",
            "SortEN1": "Ho_ long d_e_ i_ t_k_ to g_t to Geo_gia?",
            "SortEN2": "___ l_n_ _oe_ __ _a__ to ge_ _o ___rg_a?"
        },
        {
            "VN": "Chuyến bay bao lâu?",
            "EN": "How long is the flight?",
            "SortEN1": "How _ong i_ the flight?",
            "SortEN2": "_ow _ong __ th_ fl_gh_?"
        },
        {
            "VN": "Bộ phim thế nào?",
            "EN": "How was the movie?",
            "SortEN1": "How was _h_ movi_?",
            "SortEN2": "Ho_ wa_ t__ m___e_"
        },
        {
            "VN": "Tôi có câu hỏi muốn hỏi bạn. ",
            "EN": "I have a question I want to ask you.",
            "SortEN1": "I have a qu_stion _ want _o ask _o_.",
            "SortEN2": "I h_v_ a __e_t_on I ____ t_ _s_ _o_."
        },
        {
            "VN": "Tôi muốn hỏi bạn một câu hỏi.",
            "EN": "I want to ask you a question.",
            "SortEN1": "_ want to _sk yo_ _ ___stion.",
            "SortEN2": "_ w_nt _o a__ yo_ a quest_on_"
        },
        {
            "VN": "Tôi ước gì có một cái.",
            "EN": "I wish I had one.",
            "SortEN1": "I wish _ had one.",
            "SortEN2": "I ____ _ _ad one_"
        },
        {
            "VN": "Tôi muốn gọi điện thoại.",
            "EN": "I'd like to make a phone call.",
            "SortEN1": "I'd lik_ to make a p_one ca___",
            "SortEN2": "___ l_k_ to ___e a __o_e c__l_"
        },
        {
            "VN": "Tôi muốn đặt trước.",
            "EN": "I'd like to make a reservation.",
            "SortEN1": "I'd li_e to m_ke a _es_rva_ion_",
            "SortEN2": "I__ li__ t_ ____ _ r__e_v__i__."
        },
        {
            "VN": "Tôi cũng sẽ mua cái đó.",
            "EN": "I'll take that one also.",
            "SortEN1": "I'l_ _ake t_a_ one also.",
            "SortEN2": "I___ t_k_ _hat o__ __s__"
        },
        {
            "VN": "Tôi tới ngay.",
            "EN": "I'm coming right now.",
            "SortEN1": "I'm co_i_g r_g_t now_",
            "SortEN2": "_'m _o__n_ r_g__ now_"
        },
        {
            "VN": "Tôi sẽ đi về nhà trong vòng 4 ngày.",
            "EN": "I'm going home in four days.",
            "SortEN1": "_'m go_ng home in fou_ _ays.",
            "SortEN2": "__m __in_ _o__ __ f__r d_ys."
        },
        {
            "VN": "Ngày mai tôi sẽ đi.",
            "EN": "I'm leaving Tomorrow.",
            "SortEN1": "I'm leaving To_o__ow.",
            "SortEN2": "I'_ lea_i_g __mor_o__"
        },
        {
            "VN": "Tôi đang tìm bưu điện.",
            "EN": "I'm looking for the post office.",
            "SortEN1": "I'm lo_king _or _he pos_ o_fice.",
            "SortEN2": "I'_ __o____ _o_ _he __st ____ce."
        },
        {
            "VN": "Cái bút này có phải của bạn không?",
            "EN": "Is this pen yours?",
            "SortEN1": "Is this pe_ _o_rs?",
            "SortEN2": "__ ___s _en _o___?"
        },
        {
            "VN": "Một vé đi New York, xin vui lòng.",
            "EN": "One ticket to New York please.",
            "SortEN1": "One ____et __ New Y__k pleas_.",
            "SortEN2": "On_ t_ck__ __ New Yo__ pl_a_e_"
        },
        {
            "VN": "Một chiều hay khứ hồi?",
            "EN": "One way or round trip?",
            "SortEN1": "One way _r ro_n_ tr_p?",
            "SortEN2": "_n_ wa_ _r _ou__ __ip_"
        },
        {
            "VN": "Làm ơn nói chậm hơn.",
            "EN": "Please speak slower.",
            "SortEN1": "Please _pea_ slow__.",
            "SortEN2": "Ple_se __ea_ __o__r."
        },
        {
            "VN": "Làm ơn đưa tôi tới phi trường.",
            "EN": "Please take me to the airport.",
            "SortEN1": "P_ea_e take me t_ _he airport_",
            "SortEN2": "Pl____ t_ke me __ _he _____rt_"
        },
        {
            "VN": "Lối đó.",
            "EN": "That way.",
            "SortEN1": "That _ay_",
            "SortEN2": "_hat _ay_"
        },
        {
            "VN": "Máy bay cất cánh lúc 5:30 chiều.",
            "EN": "The plane departs at 5:30P.",
            "SortEN1": "The plane departs a_ 5:__P.",
            "SortEN2": "T_e ____e d_p____ __ 5:3_P_"
        },
        {
            "VN": "Họ tới ngày hôm qua.",
            "EN": "They arrived yesterday.",
            "SortEN1": "They arriv_d yester____",
            "SortEN2": "T___ _r_iv_d y____r_ay_"
        },
        {
            "VN": "Quay lại.",
            "EN": "Turn around.",
            "SortEN1": "_ur_ ___u_d.",
            "SortEN2": "T_r_ a_ou___"
        },
        {
            "VN": "Rẽ trái.",
            "EN": "Turn left.",
            "SortEN1": "Turn left_",
            "SortEN2": "_u__ l___."
        },
        {
            "VN": "Rẽ phải.",
            "EN": "Turn right.",
            "SortEN1": "T_rn right.",
            "SortEN2": "___n _i___."
        },
        {
            "VN": "Mấy giờ bạn sẽ ra trạm xe buýt?",
            "EN": "What time are you going to the bus station?",
            "SortEN1": "_ha_ time are y_u go_n_ _o _he bus __atio__",
            "SortEN2": "Wh_t t_me _re ___ goi_g _o the bu_ s_a__o_?"
        },
        {
            "VN": "Việc này xảy ra khi nào?",
            "EN": "When did this happen?",
            "SortEN1": "W_en did thi_ _ap_e_?",
            "SortEN2": "_h_n d__ ___s hap__n?"
        },
        {
            "VN": "Bạn đã tới Boston khi nào?",
            "EN": "When did you arrive in Boston?",
            "SortEN1": "When did you arri_e _n Bos_on_",
            "SortEN2": "W_en ___ y_u a___ve i_ _os_o__"
        },
        {
            "VN": "Khi nào chúng ta tới nơi?",
            "EN": "When do we arrive?",
            "SortEN1": "_h_n d_ w_ a_ri_e?",
            "SortEN2": "W_e_ d_ we a_____?"
        },
        {
            "VN": "Khi nào chúng ta ra đi?",
            "EN": "When do we leave?",
            "SortEN1": "When _o we leav_?",
            "SortEN2": "__e_ __ _e l__v__"
        },
        {
            "VN": "Khi nào anh ta tới?",
            "EN": "When does he arrive?",
            "SortEN1": "When d__s he a_r__e?",
            "SortEN2": "_h__ doe_ __ ___i_e_"
        },
        {
            "VN": "Khi nào nó tới?",
            "EN": "When does it arrive?",
            "SortEN1": "When d_es it _rrive?",
            "SortEN2": "_he_ d__s _t arr__e_"
        },
        {
            "VN": "Khi nào ngân hàng mở cửa?",
            "EN": "When does the bank open?",
            "SortEN1": "__en do_s _h_ bank ope_?",
            "SortEN2": "_he_ ___s the __nk o__n?"
        },
        {
            "VN": "Khi nào xe buýt khởi hành?",
            "EN": "When does the bus leave?",
            "SortEN1": "_h_n d__s the _u_ _eave?",
            "SortEN2": "_h_n ____ __e _us _e__e?"
        },
        {
            "VN": "Tôi có thể gửi bưu điện cái này ở đâu?",
            "EN": "Where can I mail this?",
            "SortEN1": "_her_ c_n I m__l t_is_",
            "SortEN2": "W___e _an _ m___ _hi__"
        },
        {
            "VN": "Cô ta từ đâu tới?",
            "EN": "Where is she from?",
            "SortEN1": "W__r_ is she __om_",
            "SortEN2": "_____ _s __e ___m?"
        },
        {
            "VN": "Phòng tắm ở đâu?",
            "EN": "Where is the bathroom?",
            "SortEN1": "Whe_e is __e __thr_om?",
            "SortEN2": "W_e_e __ _h_ ___h__om?"
        },
        {
            "VN": "Tại sao không?",
            "EN": "Why not?",
            "SortEN1": "Why not_",
            "SortEN2": "Wh_ n_t?"
        },
        {
            "VN": "Làm ơn nhắc tôi.",
            "EN": "Will you remind me?",
            "SortEN1": "W_ll _ou r_mi_d me?",
            "SortEN2": "W_l_ yo_ r_m___ me?"
        },
        {
            "VN": "Tôi sẽ trả tiền vé.",
            "EN": "I'll pay for the tickets.",
            "SortEN1": "_'l_ p_y f__ the ti_kets.",
            "SortEN2": "__l_ pa_ ___ _he ticke___"
        },
        {
            "VN": "Tôi 26 tuổi.",
            "EN": "I'm 26 years old.",
            "SortEN1": "I'm 26 year_ old.",
            "SortEN2": "I__ __ yea__ _ld."
        },
        {
            "VN": "Như vậy được không?",
            "EN": "Is that ok?",
            "SortEN1": "Is t_at ok?",
            "SortEN2": "I_ ___t ok?"
        },
        {
            "VN": "Có thư cho tôi không?",
            "EN": "Is there any mail for me?",
            "SortEN1": "Is there __y mail fo_ me?",
            "SortEN2": "__ th___ _ny ___l __r _e_"
        },
        {
            "VN": "Phải không?",
            "EN": "Isn't it?",
            "SortEN1": "I__'t it?",
            "SortEN2": "I__'t i_?"
        },
        {
            "VN": "Bây giờ là 11:30 tối.",
            "EN": "It's 11:30pm.",
            "SortEN1": "It'_ _1:30pm.",
            "SortEN2": "It_s ___3_p_."
        },
        {
            "VN": "Bây giờ là 9 giờ 15.",
            "EN": "It's is a quarter past nine.",
            "SortEN1": "It_s _s a qua__er pas_ nin_.",
            "SortEN2": "It'_ i_ a q__rte_ _a__ _in__"
        },
        {
            "VN": "Làm ơn vào đi.",
            "EN": "Please come in.",
            "SortEN1": "Plea__ co_e _n_",
            "SortEN2": "P___s_ __me in."
        },
        {
            "VN": "Xin lỗi, chúng tôi không nhận thẻ tín dụng.",
            "EN": "Sorry, we don't accept credit cards.",
            "SortEN1": "Sor_y_ _e don't a_cept c_e__t car__.",
            "SortEN2": "_orr_ w_ don'_ a_ce__ _r_di_ ___ds."
        },
        {
            "VN": "Xin lỗi, chúng tôi chỉ nhận tiền mặt.",
            "EN": "Sorry, we only accept Cash.",
            "SortEN1": "Sorry w_ only a_c_p_ Cash_",
            "SortEN2": "_or__ we _nly a_____ _as__"
        },
        {
            "VN": "Nhà hàng đó không đắt.",
            "EN": "That restaurant is not expensive.",
            "SortEN1": "_h_t _e__aurant _s no_ _xpensive.",
            "SortEN2": "_h_t r_s__u___t i_ _ot _x_____ve_"
        },
        {
            "VN": "Như vậy đắt quá.",
            "EN": "That's too expensive.",
            "SortEN1": "That's too ex_ens_ve.",
            "SortEN2": "__at__ too ex__n__v__"
        },
        {
            "VN": "Ở đây có nhiều người.",
            "EN": "There are many people here.",
            "SortEN1": "___re are many people __re_",
            "SortEN2": "__er_ _r_ _an_ _e__l_ h_r__"
        },
        {
            "VN": "Họ tính 26 đô một ngày.",
            "EN": "They charge 26 dollars per day.",
            "SortEN1": "T_ey _h_rge 26 d_llars pe_ d_y_",
            "SortEN2": "T___ ___r_e 2_ __ll___ _er _ay_"
        },
        {
            "VN": "Hối suất đô la là bao nhiêu?",
            "EN": "What's the exchange rate for dollars?",
            "SortEN1": "_hat's the exc_ange r_te __r _ollars?",
            "SortEN2": "Wh___s ___ e_ch_ng_ ____ f_r dol____?"
        },
        {
            "VN": "Số điện thoại là gì?",
            "EN": "What's the phone number?",
            "SortEN1": "_hat_s the phone numbe_?",
            "SortEN2": "__at__ _he __one numbe_?"
        },
        {
            "VN": "Tôi có thể mua vé ở đâu?",
            "EN": "Where can I buy tickets?",
            "SortEN1": "Where _a_ _ buy ti_ke_s?",
            "SortEN2": "W___e c__ _ ___ _i_k_ts?"
        },
        {
            "VN": "Bạn muốn gặp nhau ở đâu?",
            "EN": "Where would you like to meet?",
            "SortEN1": "_he_e would you _ike to _e_t?",
            "SortEN2": "___r_ __ul_ _ou _ike _o _eet_"
        },
        {
            "VN": "Cái nào tốt hơn?",
            "EN": "Which one is better?",
            "SortEN1": "Which one is be_t_r?",
            "SortEN2": "__i_h __e i_ _et___?"
        },
        {
            "VN": "Đối diện bưu điện.",
            "EN": "Across from the post office.",
            "SortEN1": "Acro__ from _he _o_t o_fi__.",
            "SortEN2": "Acros_ fro_ ___ po_t o_f_c_."
        },
        {
            "VN": "Lúc 3 giờ.",
            "EN": "At 3 o'clock.",
            "SortEN1": "A_ 3 o'c_o_k.",
            "SortEN2": "At 3 o'c__c_."
        },
        {
            "VN": "Hãy yên lặng.",
            "EN": "Be quiet.",
            "SortEN1": "Be qu_et.",
            "SortEN2": "Be ___e_."
        },
        {
            "VN": "Bạn có thể đề nghị một nhà hàng ngon không?",
            "EN": "Can you recommend a good restaurant?",
            "SortEN1": "Can yo_ re_o_mend a go_d _e_t_ura_t?",
            "SortEN2": "Can __u _ec_m_e_d _ go_d _e__auran__"
        },
        {
            "VN": "Anh ta học ở đại học Boston.",
            "EN": "He studies at Boston University.",
            "SortEN1": "He stud__s a_ Bos__n Univ_r_ity.",
            "SortEN2": "__ stu_i_s _t Bost__ U_iversi_y."
        },
        {
            "VN": "Nó đây.",
            "EN": "Here it is.",
            "SortEN1": "He_e i_ _s_",
            "SortEN2": "_e__ i_ __."
        },
        {
            "VN": "Đây nè.",
            "EN": "Here you are.",
            "SortEN1": "_ere yo_ _re.",
            "SortEN2": "_er_ __u a___"
        },
        {
            "VN": "Anh ta ở trong bếp.",
            "EN": "He's in the kitchen.",
            "SortEN1": "_e's _n th_ k_tchen.",
            "SortEN2": "_e_s __ __e k__c_e_."
        },
        {
            "VN": "Tới Chicago bao xa?",
            "EN": "How far is it to Chicago?",
            "SortEN1": "How f__ is it _o _hi__g_?",
            "SortEN2": "Ho_ f_r i_ _t t_ __ic__o?"
        },
        {
            "VN": "Nó bao xa?",
            "EN": "How far is it?",
            "SortEN1": "H_w _ar _s it_",
            "SortEN2": "Ho_ ___ _s i_?"
        },
        {
            "VN": "Tới Pennsylvania bao nhiêu dặm?",
            "EN": "How many miles is it to Pennsylvania?",
            "SortEN1": "_ow _any _i__s __ it to _en__y_va__a?",
            "SortEN2": "_ow ma__ mi_e_ i_ it __ _enn__lvania_"
        },
        {
            "VN": "Tôi thích xem tivi.",
            "EN": "I like to watch TV.",
            "SortEN1": "I _ike __ w_t_h TV.",
            "SortEN2": "I _i_e _o wa_c_ __."
        },
        {
            "VN": "Tôi sắp đi tới thư viện.",
            "EN": "I was going to the library.",
            "SortEN1": "_ was goin_ to t_e li_r_r_.",
            "SortEN2": "_ was _o_n_ t_ __e l__r__y."
        },
        {
            "VN": "Tôi ở trong thư viện.",
            "EN": "I was in the library.",
            "SortEN1": "I was in the li_rary.",
            "SortEN2": "_ __s _n th_ _ibr____"
        },
        {
            "VN": "Tôi muốn một phòng đơn.",
            "EN": "I'd like a single room.",
            "SortEN1": "I_d like _ _ing__ _oo_.",
            "SortEN2": "__d _i_e _ si___e _oom."
        },
        {
            "VN": "Món này ngon!",
            "EN": "It's delicious!",
            "SortEN1": "It_s delicious!",
            "SortEN2": "I___ d_lic_____"
        },
        {
            "VN": "Bây giờ là 11 giờ rưỡi.",
            "EN": "It's half past 11.",
            "SortEN1": "It's half past __.",
            "SortEN2": "__'_ __lf __s_ ___"
        },
        {
            "VN": "Nó ít hơn 5 đô.",
            "EN": "It's less than 5 dollars.",
            "SortEN1": "I_'s __s_ t_an 5 d__lars.",
            "SortEN2": "It's l_s_ th__ 5 __ll_rs."
        },
        {
            "VN": "Nó hơn 5 đô.",
            "EN": "It's more than 5 dollars.",
            "SortEN1": "I___ more than _ doll_rs.",
            "SortEN2": "___s ____ t__n _ _o_l_rs."
        },
        {
            "VN": "Nó gần siêu thị.",
            "EN": "It's near the Supermarket.",
            "SortEN1": "It_s near th_ S_p___a___t.",
            "SortEN2": "__'_ ne_r ___ Su____arke_."
        },
        {
            "VN": "Hôm nay có lẽ không mưa.",
            "EN": "it's not suppose to rain today.",
            "SortEN1": "it'_ _o_ suppose to rain today.",
            "SortEN2": "_t'_ not s__pos_ to ___n _o___."
        },
        {
            "VN": "Được rồi.",
            "EN": "It's ok.",
            "SortEN1": "It's ok.",
            "SortEN2": "__'s o__"
        },
        {
            "VN": "Nó trên đường số 7.",
            "EN": "It's on 7th street.",
            "SortEN1": "It'_ __ 7t_ str_et_",
            "SortEN2": "___s on __h s__ee__"
        },
        {
            "VN": "Thực là nóng.",
            "EN": "It's really hot.",
            "SortEN1": "It'_ re__ly hot_",
            "SortEN2": "_t's ______ _ot."
        },
        {
            "VN": "Trời có thể mưa ngày mai.",
            "EN": "It's suppose to rain tomorrow.",
            "SortEN1": "_t'_ s_ppo__ to ra_n t_mo_r___",
            "SortEN2": "It__ __p_ose _o _a__ to_____w_"
        },
        {
            "VN": "Chúng ta đi.",
            "EN": "Let's go.",
            "SortEN1": "Let's g_.",
            "SortEN2": "__t__ _o."
        },
        {
            "VN": "Có lẽ.",
            "EN": "Maybe.",
            "SortEN1": "Ma_b_.",
            "SortEN2": "_ay___"
        },
        {
            "VN": "Hơn 200 dặm.",
            "EN": "More than 200 miles.",
            "SortEN1": "Mor_ th_n 200 miles.",
            "SortEN2": "_ore _ha_ 20_ _i__s_"
        },
        {
            "VN": "Nhà tôi gần ngân hàng.",
            "EN": "My house is close to the bank.",
            "SortEN1": "_y h_u_e is cl__e to the b_nk.",
            "SortEN2": "M_ h_u__ __ cl__e to _he b_nk_"
        },
        {
            "VN": "Gần ngân hàng.",
            "EN": "Near the bank.",
            "SortEN1": "Near t_e ___k_",
            "SortEN2": "__ar t__ _a___"
        },
        {
            "VN": "Bên trái.",
            "EN": "On the left.",
            "SortEN1": "_n the __ft.",
            "SortEN2": "_n th_ le_t."
        },
        {
            "VN": "Bên phải.",
            "EN": "On the right.",
            "SortEN1": "On _he ri_h_.",
            "SortEN2": "On t__ _i_ht_"
        },
        {
            "VN": "Trên tầng hai.",
            "EN": "On the second floor.",
            "SortEN1": "On t_e __cond floor.",
            "SortEN2": "On the sec_nd __o__."
        },
        {
            "VN": "Bên ngoài khách sạn.",
            "EN": "Outside the hotel.",
            "SortEN1": "Outsid_ the hotel.",
            "SortEN2": "_u___de _he __t___"
        },
        {
            "VN": "Ở đây.",
            "EN": "Over here.",
            "SortEN1": "__er here_",
            "SortEN2": "O___ _er_."
        },
        {
            "VN": "Ở đằng kia.",
            "EN": "Over there.",
            "SortEN1": "O__r ther_.",
            "SortEN2": "_ve_ _her_."
        },
        {
            "VN": "Quyển sách ở sau cái bàn.",
            "EN": "The book is behind the table.",
            "SortEN1": "The book is beh_nd the table.",
            "SortEN2": "T__ bo_k __ _e_i__ ___ _able_"
        },
        {
            "VN": "Quyển sách ở trước cái bàn.",
            "EN": "The book is in front of the table.",
            "SortEN1": "__e boo_ is __ _ron_ of _he ta_l_.",
            "SortEN2": "_h_ b_o_ __ i_ _ro__ o_ ___ t_b_e_"
        },
        {
            "VN": "Quyển sách ở gần cái bàn.",
            "EN": "The book is near the table.",
            "SortEN1": "The _o__ _s ne_r t__ table.",
            "SortEN2": "_he b_ok i_ n_a_ the _abl__"
        },
        {
            "VN": "Quyển sách ở cạnh cái bàn.",
            "EN": "The book is next to the table.",
            "SortEN1": "_he _ook is ___t to the ta_le.",
            "SortEN2": "T__ _oo_ __ nex_ t_ __e t_b_e_"
        },
        {
            "VN": "Quyển sách ở trên mặt bàn.",
            "EN": "The book is on top of the table.",
            "SortEN1": "The _ook __ on _o_ of _he tabl_.",
            "SortEN2": "_he ___k __ on _op _f t_e ta_l__"
        },
        {
            "VN": "Có vài quyển sách trên bàn.",
            "EN": "There are some books on the table.",
            "SortEN1": "Th_re a_e some bo___ on the t_ble.",
            "SortEN2": "_h_r_ are so_e ___ks o_ the t_____"
        },
        {
            "VN": "Có một quyển sách dưới bàn.",
            "EN": "There's a book under the table.",
            "SortEN1": "_h__e_s a b_o_ un_er the _able_",
            "SortEN2": "_h_re__ a __ok _n_e_ t__ ta__e."
        },
        {
            "VN": "Chúng tôi từ California.",
            "EN": "We're from California.",
            "SortEN1": "We're fr_m _a__fo_nia.",
            "SortEN2": "_e're fr__ C___fo__i_."
        },
        {
            "VN": "Địa chỉ là gì?",
            "EN": "What's the address?",
            "SortEN1": "Wh_t_s the addre_s_",
            "SortEN2": "W_a__s ___ _ddr_s_?"
        },
        {
            "VN": "Bạn sẽ đi đâu?",
            "EN": "Where are you going?",
            "SortEN1": "Where _re _ou go_ng?",
            "SortEN2": "Whe_e a__ __u go___?"
        },
        {
            "VN": "Nó ở đâu?",
            "EN": "Where is it?",
            "SortEN1": "Where is i_?",
            "SortEN2": "Whe_e i_ i_?"
        },
        {
            "VN": "Bạn muốn đi đâu?",
            "EN": "Where would you like to go?",
            "SortEN1": "Where w__ld you l_ke _o g_?",
            "SortEN2": "____e _____ __u like _o g_?"
        },
        {
            "VN": "Ai đã thắng?",
            "EN": "Who won?",
            "SortEN1": "Who __n?",
            "SortEN2": "_h_ _o_?"
        },
        {
            "VN": "Làm ơn cho xem thông hành của bạn.",
            "EN": "Can I see your passport please?",
            "SortEN1": "Can I see y_ur pas_port please?",
            "SortEN2": "___ _ s_e __u_ p_____rt p__a_e?"
        },
        {
            "VN": "Tôi có thể nhận một lời nhắn không?",
            "EN": "Can I take a message?",
            "SortEN1": "_an _ _a_e _ message?",
            "SortEN2": "_a_ I __ke _ mes___e?"
        },
        {
            "VN": "Tôi có thể mặc thử không?",
            "EN": "Can I try it on?",
            "SortEN1": "_an I tr_ _t __?",
            "SortEN2": "___ _ _ry i_ ___"
        },
        {
            "VN": "Chúng tôi có thể ngồi ở đằng kia không?",
            "EN": "Can we sit over there?",
            "SortEN1": "Can _e sit o_e_ t_ere?",
            "SortEN2": "_an __ s_t __e_ _h_r__"
        },
        {
            "VN": "Bạn tới với gia đình hả?",
            "EN": "Did you come with your family?",
            "SortEN1": "D__ y_u _om_ wit_ your _amily?",
            "SortEN2": "__d y__ __me wit_ __ur _ami___"
        },
        {
            "VN": "Bạn có nghĩ điều đó có thể xảy ra không?",
            "EN": "Do you think it's possible?",
            "SortEN1": "_o you _h__k _t's possible_",
            "SortEN2": "Do _ou ___n_ it__ _o___bl_?"
        },
        {
            "VN": "Đây là số của tôi.",
            "EN": "Here's my number.",
            "SortEN1": "Here_s m_ number.",
            "SortEN2": "H_r_'s my _u_ber_"
        },
        {
            "VN": "Ngay lúc này anh ta không có đây.",
            "EN": "He's not in right now.",
            "SortEN1": "He_s not _n right _ow.",
            "SortEN2": "_e__ no_ __ _i_ht _ow_"
        },
        {
            "VN": "Chào, có phải bà Smith ở đằng kia không?",
            "EN": "Hi, is Mrs. Smith there, please?",
            "SortEN1": "H_ i_ Mrs. S_ith t_ere pl_ase?",
            "SortEN2": "H__ i_ Mr_. Smi__ the_e pl_ase?"
        },
        {
            "VN": "Tôi có ba người con, hai gái một trai.",
            "EN": "I have three children, two girls and one boy.",
            "SortEN1": "I hav_ th___ _hildren_ tw_ g_rls a_d one bo_.",
            "SortEN2": "I h__e th__e _hil_ren_ t__ g_rl_ _nd _n_ _o_."
        },
        {
            "VN": "Tôi cần một ít khăn giấy.",
            "EN": "I need some tissues.",
            "SortEN1": "I n_ed s_me __ssue_.",
            "SortEN2": "_ n_ed _ome ti_sue__"
        },
        {
            "VN": "Tôi muốn tặng bạn một món quà.",
            "EN": "I want to give you a gift.",
            "SortEN1": "I _ant to give you a g__t.",
            "SortEN2": "_ wan_ __ _i__ _o_ a _i_t_"
        },
        {
            "VN": "Tôi cũng muốn một ít nước, xin vui lòng.",
            "EN": "I'd like some water too, please.",
            "SortEN1": "I'_ l_ke so_e w_te_ to_ pl__se.",
            "SortEN2": "I_d _ik_ s_me __te_ too_ _le__e."
        },
        {
            "VN": "Tôi muốn mua một chai nước, xin vui lòng.",
            "EN": "I'd like to buy a bottle of water, please.",
            "SortEN1": "I'_ _ike _o _uy a bo_t_e of w_ter_ please.",
            "SortEN2": "I__ __ke _o b__ _ __t_le _f _a_er pl__se."
        },
        {
            "VN": "Tôi muốn mua một món đồ.",
            "EN": "I'd like to buy something.",
            "SortEN1": "I'd lik_ to _uy som_thing.",
            "SortEN2": "_'_ l___ _o _uy _ome___ng_"
        },
        {
            "VN": "Tôi muốn đến cửa hàng.",
            "EN": "I'd like to go to the store.",
            "SortEN1": "I'd lik_ t_ go to the st__e.",
            "SortEN2": "I__ _i_e t_ g_ __ __e s_ore."
        },
        {
            "VN": "Tôi muốn thuê xe hơi.",
            "EN": "I'd like to rent a car.",
            "SortEN1": "I_d __k_ to _ent a c_r.",
            "SortEN2": "_'d li_e t_ __n_ a __r_"
        },
        {
            "VN": "Tôi muốn gửi phắc.",
            "EN": "I'd like to send a fax.",
            "SortEN1": "_'d like to send _ fax.",
            "SortEN2": "I_d _ik_ _o ____ _ fax_"
        },
        {
            "VN": "Tôi muốn gửi cái này đi Mỹ.",
            "EN": "I'd like to send this to America.",
            "SortEN1": "I'd _ike to se__ t_is t_ _meric_.",
            "SortEN2": "__d li_e t_ ____ this _o Am__ic__"
        },
        {
            "VN": "Tôi muốn nói chuyện với ông Smith, xin vui lòng.",
            "EN": "I'd like to speak to Mr. Smith please.",
            "SortEN1": "I'd like __ _peak t_ _r. Sm_th please.",
            "SortEN2": "I_d ___e t_ sp_a_ _o _r_ _m_th p__a_e."
        },
        {
            "VN": "Tôi sẽ trở lại ngay.",
            "EN": "I'll be right back.",
            "SortEN1": "I'll be right back.",
            "SortEN2": "_'_l be __ght ba_k."
        },
        {
            "VN": "Tôi sẽ gọi lại sau.",
            "EN": "I'll call back later.",
            "SortEN1": "I'_l call back _ate__",
            "SortEN2": "__ll ____ _a__ la_e_."
        },
        {
            "VN": "Tôi sẽ gọi bạn vào thứ sáu.",
            "EN": "I'll call you on Friday.",
            "SortEN1": "I'll ca_l you on Frida_.",
            "SortEN2": "I'__ _a_l yo_ __ F_i__y."
        },
        {
            "VN": "Tôi sẽ dạy bạn.",
            "EN": "I'll teach you.",
            "SortEN1": "I'll teach you_",
            "SortEN2": "I'__ ___c_ y__."
        },
        {
            "VN": "Tôi ổn.",
            "EN": "I'm ok.",
            "SortEN1": "_'m ok.",
            "SortEN2": "_'m ok."
        },
        {
            "VN": "Có hướng dẫn viên nói tiếng Anh không?",
            "EN": "Is there an English speaking guide?",
            "SortEN1": "I_ _h_re an ___lish _peaking gui_e?",
            "SortEN2": "_s _her_ a_ En___s_ __e__i__ ___d__"
        },
        {
            "VN": "Nam hay nữ?",
            "EN": "Male or female?",
            "SortEN1": "Mal_ or female_",
            "SortEN2": "_a_e or _em___?"
        },
        {
            "VN": "Điện thoại di động của tôi không nhận tín hiệu tốt.",
            "EN": "My cell phone doesn't have good reception.",
            "SortEN1": "M_ cell p_o_e doesn'_ have go_d reception_",
            "SortEN2": "My ce_l ph_ne _o_s___ _av_ __o_ re_eptio_."
        },
        {
            "VN": "Điện thoại di động của tôi bị hỏng.",
            "EN": "My cell phone doesn't work.",
            "SortEN1": "My cell _hone doesn_t w_rk.",
            "SortEN2": "_y __ll ph_ne does_'t __rk_"
        },
        {
            "VN": "Làm ơn cởi giày ra.",
            "EN": "Please take off your shoes.",
            "SortEN1": "Ple_se ta_e off your shoes.",
            "SortEN2": "Ple___ ___e _f_ __u_ s_oes_"
        },
        {
            "VN": "Xin lỗi, tôi nghĩ tôi gọi nhầm số.",
            "EN": "Sorry, I think I have the wrong number.",
            "SortEN1": "Sorry _ _h__k I h_ve t_e _ro_g _um__r_",
            "SortEN2": "_or_y I t__n_ _ ____ t_e _ro__ n__b___"
        },
        {
            "VN": "Mã vùng là bao nhiêu?",
            "EN": "What is the area code?",
            "SortEN1": "Wh_t _s the area co_e_",
            "SortEN2": "Wh__ __ the a__a c___?"
        },
        {
            "VN": "Tên của công ty bạn làm việc là gì?",
            "EN": "What's the name of the company you work for?",
            "SortEN1": "Wh_t's the name o_ th_ co_pany ___ w_rk _or_",
            "SortEN2": "_ha_'s ___ n___ _f th_ _o_p___ __u _ork __r_"
        },
        {
            "VN": "Có gì không ổn?",
            "EN": "What's wrong?",
            "SortEN1": "W_at's _rong?",
            "SortEN2": "Wh__'s _r____"
        },
        {
            "VN": "Địa chỉ của bạn là gì?",
            "EN": "What's your address?",
            "SortEN1": "W__t_s _our address?",
            "SortEN2": "Wh____ you_ addres__"
        },
        {
            "VN": "Tôi có thể tìm được một bệnh viện ở đâu?",
            "EN": "Where can I find a hospital?",
            "SortEN1": "W_e_e c_n I fi_d a hospita__",
            "SortEN2": "__e_e ca_ _ fin_ a _os_i_al_"
        },
        {
            "VN": "Nhà hàng gần nhất ở đâu?",
            "EN": "Where's the closest restaurant?",
            "SortEN1": "Wh_re__ the clos_st _e__a_rant?",
            "SortEN2": "Whe___s ___ c___est re_taur___?"
        },
        {
            "VN": "Hiệu thuốc ở đâu?",
            "EN": "Where's the pharmacy?",
            "SortEN1": "_he_e's t__ phar_a_y?",
            "SortEN2": "__er___ t_e ph_r__c_?"
        },
        {
            "VN": "Bạn là ai?",
            "EN": "Who are you?",
            "SortEN1": "W__ a_e y_u?",
            "SortEN2": "___ __e __u?"
        },
        {
            "VN": "Đó là ai?",
            "EN": "Who is that?",
            "SortEN1": "Who i_ th_t_",
            "SortEN2": "Wh_ __ t___?"
        },
        {
            "VN": "Bạn muốn nói chuyện với ai?",
            "EN": "Who would you like to speak to?",
            "SortEN1": "Who wo_ld yo_ __ke _o _pea_ ___",
            "SortEN2": "Wh_ woul_ y_u _ike _o ___a_ t__"
        },
        {
            "VN": "Làm ơn đưa tôi về nhà.",
            "EN": "Will you take me home?",
            "SortEN1": "___l y__ __ke _e _ome?",
            "SortEN2": "W_ll you take m_ h_m_?"
        },
        {
            "VN": "Bạn muốn uống nước hay sữa?",
            "EN": "Would you like water or milk?",
            "SortEN1": "Would you _ike water _r _il__",
            "SortEN2": "_ould yo_ lik_ wat__ o_ mi__?"
        },
        {
            "VN": "Cách đây 11 ngày.",
            "EN": "11 days ago.",
            "SortEN1": "11 day_ ago_",
            "SortEN2": "11 _a__ a_o."
        },
        {
            "VN": "2 tiếng.",
            "EN": "2 hours.",
            "SortEN1": "2 h_urs.",
            "SortEN2": "2 h__rs."
        },
        {
            "VN": "Cách nay đã lâu.",
            "EN": "A long time ago.",
            "SortEN1": "A __ng tim_ ag_.",
            "SortEN2": "A _o_g ti__ _g__"
        },
        {
            "VN": "Suốt ngày.",
            "EN": "All day.",
            "SortEN1": "All _ay.",
            "SortEN2": "___ ___."
        },
        {
            "VN": "Tối nay họ có tới không?",
            "EN": "Are they coming this evening?",
            "SortEN1": "A_e __ey coming th_s e_eni_g_",
            "SortEN2": "__e __ey co__n_ ___s __en__g?"
        },
        {
            "VN": "Bạn có thoải mái không?",
            "EN": "Are you comfortable?",
            "SortEN1": "_re y__ comf_r_able?",
            "SortEN2": "A__ ___ c_mf_r_a_l_?"
        },
        {
            "VN": "Con của bạn có đi với bạn không?",
            "EN": "Are your children with you?",
            "SortEN1": "_re y_ur ch__dre_ w___ you?",
            "SortEN2": "_re y_u_ chil_r_n __t_ _o__"
        },
        {
            "VN": "Càng sớm càng tốt.",
            "EN": "As soon as possible.",
            "SortEN1": "__ so_n as _oss__le.",
            "SortEN2": "A_ soo_ as _os____e_"
        },
        {
            "VN": "Lúc 3 giờ chiều.",
            "EN": "At 3 o'clock in the afternoon.",
            "SortEN1": "At 3 o'c_oc_ in th_ _fterno_n.",
            "SortEN2": "_t _ o__lo_k __ _he a___rnoon."
        },
        {
            "VN": "Tại đường số 5.",
            "EN": "At 5th street.",
            "SortEN1": "A_ 5th s_reet.",
            "SortEN2": "_t __h st_eet_"
        },
        {
            "VN": "Lúc 7 giờ tối.",
            "EN": "At 7 o'clock at night.",
            "SortEN1": "A_ 7 o'clock a_ night.",
            "SortEN2": "_t 7 o'_l_c_ at night."
        },
        {
            "VN": "Lúc 7 giờ sáng.",
            "EN": "At 7 o'clock in the morning.",
            "SortEN1": "A_ 7 _'clo__ i_ the __r__n__",
            "SortEN2": "A_ _ _'_l___ _n __e mo___ng_"
        },
        {
            "VN": "Việc đó xảy ra lúc mấy giờ?",
            "EN": "At what time did it happen?",
            "SortEN1": "_t what _im_ _id it _appe_?",
            "SortEN2": "A_ _h__ _i_e __d __ hap__n?"
        },
        {
            "VN": "Tôi có thể giúp gì bạn?",
            "EN": "Can I help you?",
            "SortEN1": "_an _ help you?",
            "SortEN2": "Can I h___ _ou?"
        },
        {
            "VN": "Bạn có hồ bơi không?",
            "EN": "Do you have a swimming pool?",
            "SortEN1": "Do y_u hav_ _ sw_mming pool_",
            "SortEN2": "Do _ou ha_e _ s__m_i_g _o___"
        },
        {
            "VN": "Bạn có món này cỡ 11 không?",
            "EN": "Do you have this in size 11?",
            "SortEN1": "Do _ou ha_e __i_ in si_e 11?",
            "SortEN2": "D_ __u have t_is i_ __ze _1?"
        },
        {
            "VN": "Bạn có nghĩ là bạn sẽ trở lại lúc 11:30 không?",
            "EN": "Do you think you'll be back by 11:30?",
            "SortEN1": "Do _o_ t_i_k you'l_ _e ba_k by 11__0?",
            "SortEN2": "D_ _ou _hin_ y_u__l be _ac_ b_ _1_3__"
        },
        {
            "VN": "Hàng tuần.",
            "EN": "Every week.",
            "SortEN1": "E_ery wee__",
            "SortEN2": "_v_ry we_k."
        },
        {
            "VN": "Hàng ngày tôi dạy lúc 6 giờ sáng.",
            "EN": "Everyday I get up at 6AM.",
            "SortEN1": "Eve__day I get _p a_ 6_M.",
            "SortEN2": "_v_r__a_ _ ge_ u_ _t __M_"
        },
        {
            "VN": "Ngày hết hạn.",
            "EN": "Expiration date.",
            "SortEN1": "_x_i__tion _at_.",
            "SortEN2": "Exp_r_t__n ____."
        },
        {
            "VN": "Bạn đợi đã lâu chưa?",
            "EN": "Have you been waiting long?",
            "SortEN1": "_a_e you b_en waiting lo_g?",
            "SortEN2": "_av_ y__ _ee_ w__t_n_ ____?"
        },
        {
            "VN": "Anh ta sẽ trở lại trong vòng 20 phút nữa.",
            "EN": "He'll be back in 20 minutes.",
            "SortEN1": "He'll be b__k i_ 20 m__ute__",
            "SortEN2": "He'_l _e b_c_ i_ 20 _in__es_"
        },
        {
            "VN": "Gia đình anh ta sẽ tới vào ngày mai.",
            "EN": "His family is coming tomorrow.",
            "SortEN1": "Hi_ fa_il_ is comi_g to_or_ow.",
            "SortEN2": "His _am_l_ __ c_m___ ____rrow."
        },
        {
            "VN": "Còn thứ bảy thì sao?",
            "EN": "How about Saturday?",
            "SortEN1": "H_w abou_ __tur_ay?",
            "SortEN2": "_o_ a_o__ ___ur____"
        },
        {
            "VN": "Bạn sẽ ở California bao lâu?",
            "EN": "How long are you going to stay in",
            "SortEN1": "H_w lo_g a_e __u _o_ng _o stay in",
            "SortEN2": "__w __ng _re __u _o_n_ to __a_ __"
        },
        {
            "VN": "California?",
            "EN": "Bạn sẽ ở bao lâu?",
            "SortEN1": "Bạ_ _ẽ ở bao l_u?",
            "SortEN2": "B__ _ẽ _ b_o __u_"
        },
        {
            "VN": "How long are you going to stay?",
            "EN": "Sẽ mất bao lâu?",
            "SortEN1": "__ mất _a_ lâu_",
            "SortEN2": "Sẽ mấ_ ba_ ____"
        },
        {
            "VN": "How long will it take?",
            "EN": "Tất cả bao nhiêu?",
            "SortEN1": "Tấ_ cả b_o nh_êu?",
            "SortEN2": "T__ c_ __o nh__u?"
        },
        {
            "VN": "How much altogether?",
            "EN": "Sẽ tốn bao nhiêu?",
            "SortEN1": "__ _ốn ba_ nhi_u?",
            "SortEN2": "Sẽ __n bao ___ê_?"
        },
        {
            "VN": "How much will it cost?",
            "EN": "Tôi không có đủ tiền.",
            "SortEN1": "T_i khô_g có _ủ tiền.",
            "SortEN2": "T__ ___n_ _ó _ủ t____"
        },
        {
            "VN": "I don't have enough money.",
            "EN": "Tôi chuẩn bị đi.",
            "SortEN1": "Tôi ch_ẩn bị _i.",
            "SortEN2": "Tôi ___ẩ_ bị __."
        },
        {
            "VN": "I'm getting ready to go out.",
            "EN": "Tôi chỉ xem thôi. (mua sắm)",
            "SortEN1": "T__ c_ỉ xem thôi. (mu_ sắm)",
            "SortEN2": "T__ c_ỉ x__ _____ (mu_ s_m)"
        },
        {
            "VN": "I'm just looking.",
            "EN": "Tôi cũng lo.",
            "SortEN1": "Tôi c__g lo.",
            "SortEN2": "_ô_ ___g __."
        },
        {
            "VN": "I'm worried too.",
            "EN": "Hôm nay trời mưa rất lớn.",
            "SortEN1": "Hô_ na_ _rời _ưa r_t __n.",
            "SortEN2": "_ôm __y __ờ_ mưa __t ___."
        },
        {
            "VN": "It rained very hard today.",
            "EN": "Tối nay trời sẽ lạnh.",
            "SortEN1": "T_i n_y trời sẽ l_nh.",
            "SortEN2": "_ối n__ tr_i sẽ _ạ___"
        },
        {
            "VN": "It'll be cold this evening.",
            "EN": "Giá 17 đồng.",
            "SortEN1": "G_á 17 đồng.",
            "SortEN2": "G__ 17 đ_ng_"
        },
        {
            "VN": "It's 17 dollars.",
            "EN": "Bây giờ là 6 giờ sáng.",
            "SortEN1": "Bây _iờ là 6 giờ sán__",
            "SortEN2": "_â_ ___ là 6 _iờ s_n_."
        },
        {
            "VN": "It's 6AM.",
            "EN": "Bây giờ là 8:45.",
            "SortEN1": "B_y __ờ là _:__.",
            "SortEN2": "B_y __ờ là __45."
        },
        {
            "VN": "It's 8:45.",
            "EN": "Bây giờ là 7 giờ thiếu 15.",
            "SortEN1": "Bây giờ l_ _ giờ t___u _5.",
            "SortEN2": "Bâ_ ___ __ 7 g__ th_ếu 1__"
        },
        {
            "VN": "It's a quarter to 7.",
            "EN": "Hôm nay trời sẽ mưa tuyết.",
            "SortEN1": "Hôm n_y _rời sẽ _ư_ t__ế_.",
            "SortEN2": "_ôm na_ ___i s_ __a t_yết_"
        },
        {
            "VN": "It's going to snow today.",
            "EN": "Nó đây.",
            "SortEN1": "Nó đ__.",
            "SortEN2": "__ đ_y."
        },
        {
            "VN": "It's here.",
            "EN": "Nó ở đó.",
            "SortEN1": "Nó ở đó.",
            "SortEN2": "_ó ở đó_"
        },
        {
            "VN": "It's there.",
            "EN": "Tôi đã xem nó.",
            "SortEN1": "T__ đã xem n_.",
            "SortEN2": "Tô_ __ x_m _ó."
        },
        {
            "VN": "I've already seen it.",
            "EN": "Ngày mai John sẽ đi nghỉ mát.",
            "SortEN1": "__ày mai J_hn sẽ đ_ n_hỉ mát_",
            "SortEN2": "Ngày _ai Jo_n _ẽ đi n_h_ má_."
        },
        {
            "VN": "John is going on vacation tomorrow.",
            "EN": "Sinh nhật của tôi là 27 tháng 8.",
            "SortEN1": "_i__ _hậ_ của tôi là 27 _h__g __",
            "SortEN2": "__n_ nhậ_ _ủa t__ _à 27 ___n_ _."
        },
        {
            "VN": "My birthday is August 27th.",
            "EN": "Bây giờ hoặc sau?",
            "SortEN1": "Bây _iờ h_ặc sau?",
            "SortEN2": "_â_ ___ _o__ sa_?"
        },
        {
            "VN": "Now or later?",
            "EN": "22 tháng mười.",
            "SortEN1": "22 t_áng mườ_.",
            "SortEN2": "__ __án_ mườ__"
        },
        {
            "VN": "October 22nd.",
            "EN": "Cô ta muốn biết khi nào bạn tới.",
            "SortEN1": "Cô _a m_ố_ biết _hi nào bạn tới.",
            "SortEN2": "Cô _a m_ố_ b___ khi nào bạn tới."
        },
        {
            "VN": "She wants to know when you're coming.",
            "EN": "Thỉnh thoảng tôi đi ngủ lúc 11 giờ tối, thỉnh thoảng 11:30.",
            "SortEN1": "Thỉnh _hoản_ tôi đi __ủ lúc 11 giờ tối_ thỉnh thoảng 11_30.",
            "SortEN2": "_h___ _ho_ng _ô_ đi n__ lú_ 1_ _iờ tối th_nh _h_ả_g 1_:_0."
        },
        {
            "VN": "Sometimes I go to sleep at 11PM, sometimes at 11:30PM.",
            "EN": "Cả ngày.",
            "SortEN1": "C_ ngà_.",
            "SortEN2": "_ả ngày_"
        },
        {
            "VN": "The whole day.",
            "EN": "Có nhiều thời gian.",
            "SortEN1": "C_ ___ều thời __an_",
            "SortEN2": "Có _h_ều _h_i ___n."
        },
        {
            "VN": "There's plenty of time.",
            "EN": "Chúng ta trễ.",
            "SortEN1": "Chúng ta t___",
            "SortEN2": "C_ún_ __ __ễ_"
        },
        {
            "VN": "We're late.",
            "EN": "Ngày nào họ sẽ tới?",
            "SortEN1": "Ngày nà_ _ọ _ẽ tớ_?",
            "SortEN2": "Ngà_ nào h_ sẽ t___"
        },
        {
            "VN": "What day are they coming over?",
            "EN": "Hôm nay là thứ mấy?",
            "SortEN1": "Hôm n_y là thứ _ấ_?",
            "SortEN2": "Hô_ n__ __ __ứ __y_"
        },
        {
            "VN": "What day of the week is it?",
            "EN": "Hôm nay ngày mấy?",
            "SortEN1": "Hôm _ay n__y _ấy?",
            "SortEN2": "__m _ay n__y m_y?"
        },
        {
            "VN": "What is today's date?",
            "EN": "Mấy giờ họ sẽ tới?",
            "SortEN1": "_ấy __ờ họ sẽ t___",
            "SortEN2": "___ g_ờ h_ s_ _ới_"
        },
        {
            "VN": "What time are they arriving?",
            "EN": "Bạn đã thức dậy lúc mấy giờ?",
            "SortEN1": "Bạn đã th_c dậ_ lúc mấy giờ_",
            "SortEN2": "_ạ_ đ_ th__ dậ_ l_c m_y gi_?"
        },
        {
            "VN": "What time did you get up?",
            "EN": "Bạn đã đi ngủ lúc mấy giờ?",
            "SortEN1": "_ạ_ đã đi ngủ lú_ m_y gi__",
            "SortEN2": "Bạn _ã đ_ n__ __c _ấy g_ờ?"
        },
        {
            "VN": "What time did you go to sleep?",
            "EN": "Bạn tỉnh giấc lúc mấy giờ?",
            "SortEN1": "B_n __nh g__c _úc mấy giờ?",
            "SortEN2": "B__ t_nh __ấc ___ m_y _iờ?"
        },
        {
            "VN": "What time did you wake up?",
            "EN": "Bạn nghĩ bạn sẽ tới lúc mấy giờ?",
            "SortEN1": "Bạn _ghĩ b_n sẽ __i lúc m__ _iờ?",
            "SortEN2": "_ạn ngh_ bạ_ _ẽ _ới lú_ m_y _i__"
        },
        {
            "VN": "What time do you think you'll arrive?",
            "EN": "Mấy giờ nó bắt đầu?",
            "SortEN1": "M_y g__ _ó bắt đầu?",
            "SortEN2": "___ ___ __ b_t đầ__"
        },
        {
            "VN": "What time does it start?",
            "EN": "Bây giờ là mấy giờ?",
            "SortEN1": "B_y giờ là m_y g__?",
            "SortEN2": "___ __ờ __ _ấ_ g_ờ?"
        },
        {
            "VN": "What time is it?",
            "EN": "Bạn theo tôn giáo nào?",
            "SortEN1": "_ạn theo _ô_ __áo n_o_",
            "SortEN2": "B__ th__ ___ _iáo nào_"
        },
        {
            "VN": "What's your religion?",
            "EN": "Khi nào họ tới?",
            "SortEN1": "_hi nà_ họ t_i_",
            "SortEN2": "Khi nà_ _ọ _ớ__"
        },
        {
            "VN": "When are they coming?",
            "EN": "Khi nào bạn trở lại?",
            "SortEN1": "Kh_ _à_ __n t_ở lại?",
            "SortEN2": "_hi n_o b__ t_ở __i_"
        },
        {
            "VN": "When are you coming back?",
            "EN": "Khi nào bạn đón người bạn của bạn?",
            "SortEN1": "Kh_ _à_ bạn đ_n _g_ời bạn củ_ bạ_?",
            "SortEN2": "_hi _à_ b__ _ón ___ời b__ __a ___?"
        },
        {
            "VN": "When are you going to pick up your friend?",
            "EN": "Khi nào bạn ra đi?",
            "SortEN1": "__i nào b_n _a đi?",
            "SortEN2": "K__ ___ bạn r_ _i_"
        },
        {
            "VN": "When are you leaving?",
            "EN": "Khi nào bạn chuyển đi?",
            "SortEN1": "Khi nà_ bạn ch_yể_ đi?",
            "SortEN2": "_hi _ào bạ_ chu__n ___"
        },
        {
            "VN": "When are you moving?",
            "EN": "Khi tôi tới cửa hàng, họ không có táo.",
            "SortEN1": "_hi tô_ tới cửa hà_g _ọ _hông có táo.",
            "SortEN2": "___ _ô_ t__ cửa h___ họ k__ng có tá__"
        },
        {
            "VN": "When I went to the store, they didn't have any apples.",
            "EN": "Chuyến xe buýt kế tiếp đi Philadelphia khi nào?",
            "SortEN1": "Chu_ến _e buýt kế tiế_ đi P_ila_elphia khi _ào_",
            "SortEN2": "__u__n _e buý_ kế __ế_ đi Phila__l_hi_ _hi ___?"
        },
        {
            "VN": "When is the next bus to Philidalphia?",
            "EN": "Sinh nhật bạn khi nào?",
            "SortEN1": "_inh _h_t __n _h_ _à_?",
            "SortEN2": "____ _hậ_ ___ k_i __o?"
        },
        {
            "VN": "When is your birthday?",
            "EN": "Bạn nói chuyện với mẹ bạn lần cuối khi nào?",
            "SortEN1": "_ạn _ói chu_ệ_ với m_ bạ_ lần c__i __i _ào?",
            "SortEN2": "B__ n__ __u_ệ_ với __ bạn _ần __ối k__ _à_?"
        },
        {
            "VN": "When was the last time you talked to your mother?",
            "EN": "Khi nào anh ta sẽ trở lại?",
            "SortEN1": "Khi nào _n_ t_ sẽ trở l_i?",
            "SortEN2": "Kh_ n__ a__ ta _ẽ __ở _ại?"
        },
        {
            "VN": "When will he be back?",
            "EN": "Khi nào nó sẽ sẵn sàng?",
            "SortEN1": "Khi nào nó __ sẵn s__g?",
            "SortEN2": "K__ __o __ sẽ s__ __n_?"
        },
        {
            "VN": "When will it be ready?",
            "EN": "Bạn sẽ đi đâu?",
            "SortEN1": "Bạn sẽ đi _â_?",
            "SortEN2": "B_n sẽ đi đâu?"
        },
        {
            "VN": "Where are you going to go?",
            "EN": "Bạn có bận không?",
            "SortEN1": "Bạn có bậ_ không?",
            "SortEN2": "_ạ_ c_ _ậ_ ____g?"
        },
        {
            "VN": "Are you busy?",
            "EN": "Làm ơn cho thêm ít bánh mì.",
            "SortEN1": "L__ ơn cho thê_ í_ bánh mì_",
            "SortEN2": "Làm ơn _ho ___m ít ___h ___"
        },
        {
            "VN": "Can we have some more bread please?",
            "EN": "Bạn có tiền không?",
            "SortEN1": "Bạ_ c_ ti_n không?",
            "SortEN2": "Bạ_ c_ _iền __ô__?"
        },
        {
            "VN": "Do you have any money?",
            "EN": "Cho mấy đêm?",
            "SortEN1": "C_o m_y _êm_",
            "SortEN2": "_h_ _ấ_ _ê__"
        },
        {
            "VN": "For how many nights?",
            "EN": "Bạn sẽ ở bao lâu?",
            "SortEN1": "_ạ_ sẽ _ bao l_u_",
            "SortEN2": "_ạ_ sẽ _ _a_ lâu_"
        },
        {
            "VN": "How long will you be staying?",
            "EN": "Tôi cần một bác sĩ.",
            "SortEN1": "_ô_ cầ_ một b_c sĩ.",
            "SortEN2": "T__ c_n một ___ _ĩ_"
        },
        {
            "VN": "I need a doctor.",
            "EN": "Tôi muốn một tấm bản đồ của thành phố.",
            "SortEN1": "Tôi __ốn một _ấm b__ đồ củ_ th_n_ p_ố.",
            "SortEN2": "_ô_ mu_n ___ _ấ_ _ản __ _ủa ___nh ph_."
        },
        {
            "VN": "I'd like a map of the city.",
            "EN": "Tôi muốn một phòng không hút thuốc.",
            "SortEN1": "Tô_ muố_ mộ_ phò__ kh_ng hút th_ốc.",
            "SortEN2": "Tôi ___n ___ ph_n_ _h_ng _ú_ _h_ốc."
        },
        {
            "VN": "I'd like a non-smoking room.",
            "EN": "Tôi muốn một phòng với 2 giường, xin vui lòng.",
            "SortEN1": "Tôi _uố_ một phòng _ới 2 g_ường_ xi_ _u_ lòng.",
            "SortEN2": "_ôi m__n mộ_ p____ vớ_ 2 g_ư_n__ xi_ _u_ ____."
        },
        {
            "VN": "I'd like a room with two beds please.",
            "EN": "Tôi muốn một phòng.",
            "SortEN1": "T__ _uố_ _ột phò_g.",
            "SortEN2": "Tôi __ốn m__ __òng."
        },
        {
            "VN": "I'd like a room.",
            "EN": "Có hộp đêm trong thị xã không?",
            "SortEN1": "_ó hộp đê_ _r_ng _h_ xã _h__g?",
            "SortEN2": "C_ _ộp đ_m tron_ _h_ xã khôn_?"
        },
        {
            "VN": "Is there a nightclub in town?",
            "EN": "Trong khách sạn có nhà hàng không?",
            "SortEN1": "_ron_ __ách __n có nhà h_ng không_",
            "SortEN2": "___ng _h__h s__ c_ nhà h_n_ k_ô_g_"
        },
        {
            "VN": "Is there a restaurant in the hotel?",
            "EN": "Có cửa hàng gần đây không?",
            "SortEN1": "Có c_a hà_g gần __y khô_g_",
            "SortEN2": "C_ c_a hàng gần đ__ _h_ng_"
        },
        {
            "VN": "Is there a store near here?",
            "EN": "Xin lỗi, chúng tôi không còn phòng trống.",
            "SortEN1": "Xi_ l_i ch__g tôi kh___ còn ph_ng trốn_.",
            "SortEN2": "X_n __i_ ___ng t_i k__n_ c__ _h__g ____g_"
        },
        {
            "VN": "Sorry, we don't have any vacancies.",
            "EN": "Đưa tôi tới khách sạn Marriott.",
            "SortEN1": "Đưa t__ tới khách sạn Ma_r_o_t.",
            "SortEN2": "_ưa __i t__ _h_ch sạn Ma_rio_t."
        },
        {
            "VN": "Take me to the Marriott Hotel.",
            "EN": "Mấy giờ trả phòng?",
            "SortEN1": "M_y __ờ tr_ _hòng?",
            "SortEN2": "___ g_ờ t__ p_ò__?"
        },
        {
            "VN": "What time is check out?",
            "EN": "Giá bao nhiêu một đêm? (Khách sạn)",
            "SortEN1": "Giá bao n_iêu một đê_? (Khách sạn_",
            "SortEN2": "G__ _ao n____ _ột đê_? _K_ách sạn_"
        },
        {
            "VN": "What's the charge per night? (Hotel)",
            "EN": "Phi trường ở đâu?",
            "SortEN1": "Phi trư__g ở đ_u_",
            "SortEN2": "_hi tr___g ở đâu_"
        },
        {
            "VN": "Where is the airport?",
            "EN": "Hộp thư ở đâu?",
            "SortEN1": "H_p thư ở đ_u?",
            "SortEN2": "__p t__ _ đâ_?"
        },
        {
            "VN": "Where's the mail box?",
            "EN": "Bạn ở đây một mình hả?",
            "SortEN1": "B_n _ đâ_ một mìn_ hả?",
            "SortEN2": "_ạ_ ở __y một __n_ _ả?"
        },
        {
            "VN": "Are you here alone?",
            "EN": "Tôi có thể mang theo bạn không?",
            "SortEN1": "_ôi _ó t__ mang t___ bạ_ khô_g?",
            "SortEN2": "Tô_ c_ t_ể ___g _h_o _ạn khô_g_"
        },
        {
            "VN": "Can I bring my friend?",
            "EN": "Làm ơn cho tôi hóa đơn.",
            "SortEN1": "Là_ ơn c_o tôi _ó_ đơn_",
            "SortEN2": "_à_ ơ_ _ho _ôi h__ _ơ_."
        },
        {
            "VN": "Can I have a receipt please?",
            "EN": "Có thể rẻ hơn không?",
            "SortEN1": "Có _hể rẻ _ơn khôn_?",
            "SortEN2": "Có t_ể _ẻ h__ _hôn_?"
        },
        {
            "VN": "Can it be cheaper?",
            "EN": "Làm ơn đưa xem thực đơn.",
            "SortEN1": "_àm ơn đư_ xem th_c _ơn.",
            "SortEN2": "L__ ơn đ__ ___ t_ự_ ____"
        },
        {
            "VN": "Can we have a menu please.",
            "EN": "Bạn có thể giữ giùm tôi cái này được không?",
            "SortEN1": "Bạ_ _ó t_ể _iữ giù_ tôi c_i này đượ_ không?",
            "SortEN2": "B__ _ó th_ gi_ __ùm t__ cá_ n_y đ_ợc kh_n_?"
        },
        {
            "VN": "Can you hold this for me?",
            "EN": "Bạn có con không?",
            "SortEN1": "Bạn có c_n không_",
            "SortEN2": "___ __ _on kh_ng?"
        },
        {
            "VN": "Do you have any children?",
            "EN": "Bạn có biết nó giá bao nhiêu không?",
            "SortEN1": "Bạn có biế_ __ _iá bao __i_u khô_g?",
            "SortEN2": "_ạn c_ _iết n_ g__ b_o _h_ê_ k____?"
        },
        {
            "VN": "Do you know how much it costs?",
            "EN": "Bạn đã ăn ở nhà hàng này chưa?",
            "SortEN1": "B_n __ ă_ _ nhà __ng n_y ch__?",
            "SortEN2": "B__ __ ă_ ở nh_ hàng __y _hưa_"
        },
        {
            "VN": "Have you eaten at that restaurant?",
            "EN": "Bạn đã ăn chưa?",
            "SortEN1": "Bạn __ ăn chư_?",
            "SortEN2": "Bạ_ đã ă_ chưa_"
        },
        {
            "VN": "Have you eaten yet?",
            "EN": "Bạn đã từng ăn xúp khoai chưa?",
            "SortEN1": "B_n __ từng ăn x_p kho_i c_ưa?",
            "SortEN2": "B_n _ã _ừ__ ăn xú_ _h_a_ c__a_"
        },
        {
            "VN": "Have you ever had Potato soup?",
            "EN": "Anh ta thích nước trái cây nhưng anh ta ",
            "SortEN1": "An_ __ th_ch n_ớ_ trái cây nhưng _nh _a ",
            "SortEN2": "___ t_ thí_h ___c ___i _â_ __ư_g ___ ta "
        },
        {
            "VN": "không thích sữa.",
            "EN": "He likes juice but he doesn't like milk.",
            "SortEN1": "_e _ike_ juic_ _ut he doe__'t l_ke m_lk.",
            "SortEN2": "H_ _i_es _u__e b_t h_ __e_n_t li__ __lk_"
        },
        {
            "VN": "Rau của bạn đây.",
            "EN": "Here is your salad.",
            "SortEN1": "Here is your sa_ad.",
            "SortEN2": "___e is yo__ s___d_"
        },
        {
            "VN": "Đây là món hàng bạn đặt.",
            "EN": "Here's your order.",
            "SortEN1": "H__e'_ your order_",
            "SortEN2": "H_r__s yo_r _r__r."
        },
        {
            "VN": "Nó có vị ra sao?",
            "EN": "How does it taste?",
            "SortEN1": "H_w _o_s it _a_te?",
            "SortEN2": "_ow d__s it _as_e_"
        },
        {
            "VN": "Bao nhiêu người? (nhà hàng)",
            "EN": "How many people?",
            "SortEN1": "Ho_ m_ny _e_ple?",
            "SortEN2": "___ _a__ __o___?"
        },
        {
            "VN": "Tôi đồng ý.",
            "EN": "I agree.",
            "SortEN1": "I __ree.",
            "SortEN2": "I _g_ee_"
        },
        {
            "VN": "Tôi đã không ở đó.",
            "EN": "I haven't been there.",
            "SortEN1": "I hav_n't been __ere.",
            "SortEN2": "I _aven_t __en t_e_e."
        },
        {
            "VN": "Tôi chưa ăn xong.",
            "EN": "I haven't finished eating.",
            "SortEN1": "I h_ve_'t _i_i__ed _ating.",
            "SortEN2": "_ have__t _i_i___d __ting."
        },
        {
            "VN": "Tôi thích nó.",
            "EN": "I like it.",
            "SortEN1": "I _ik_ it.",
            "SortEN2": "_ _i_e it."
        },
        {
            "VN": "Tôi chỉ có 5 đô la.",
            "EN": "I only have 5 dollars.",
            "SortEN1": "I __l_ __ve 5 dollar_.",
            "SortEN2": "_ o__y _a__ _ _ol_a_s."
        },
        {
            "VN": "Tôi nghĩ tôi cần gặp bác sĩ.",
            "EN": "I think I need to see a doctor.",
            "SortEN1": "I think I _eed to _e_ a do__or.",
            "SortEN2": "_ _hi_k I need t_ _e_ a ___t_r_"
        },
        {
            "VN": "Tôi hiểu.",
            "EN": "I understand.",
            "SortEN1": "_ understand_",
            "SortEN2": "_ __de_s_a__."
        },
        {
            "VN": "Tôi muốn một phòng gần cửa sổ.",
            "EN": "I'd like a table near the window.",
            "SortEN1": "I__ like a tab_e n_ar t_e window.",
            "SortEN2": "I_d _i_e _ _a___ __ar __e win_ow."
        },
        {
            "VN": "Tôi muốn gọi sang Mỹ.",
            "EN": "I'd like to call the United States.",
            "SortEN1": "I'_ _ik_ _o call the _nit_d St__e_.",
            "SortEN2": "I_d ____ to cal_ t_e Un____ St____."
        },
        {
            "VN": "Tôi sẽ gọi điện cho bạn.",
            "EN": "I'll give you a call.",
            "SortEN1": "I'l_ give y_u a call_",
            "SortEN2": "_'_l g_v_ y__ _ ___l_"
        },
        {
            "VN": "Tôi sẽ uống một tách trà, xin vui lòng.",
            "EN": "I'll have a cup of tea please.",
            "SortEN1": "_'ll hav_ a _up o_ tea ple__e.",
            "SortEN2": "____ h_ve _ c__ _f ___ p____e_"
        },
        {
            "VN": "Tôi sẽ uống một ly nước, xin vui lòng.",
            "EN": "I'll have a glass of water please.",
            "SortEN1": "I'_l hav_ a gl_ss _f __ter please.",
            "SortEN2": "I_l_ h_v_ a _l___ o_ w_t_r plea__."
        },
        {
            "VN": "Tôi từ Mỹ tới.",
            "EN": "I'm from America.",
            "SortEN1": "___ _ro_ ___rica_",
            "SortEN2": "___ _ro_ A____ca_"
        },
        {
            "VN": "Tôi sẽ đi ngủ.",
            "EN": "I'm going to bed.",
            "SortEN1": "I'm going to b_d.",
            "SortEN2": "___ g___g _o be__"
        },
        {
            "VN": "Tôi ở đây để làm ăn.",
            "EN": "I'm here on business.",
            "SortEN1": "I'_ here on bus_nes_.",
            "SortEN2": "I__ her_ _n _u_i_e_s_"
        },
        {
            "VN": "Tôi rất tiếc.",
            "EN": "I'm sorry.",
            "SortEN1": "_'m _orr__",
            "SortEN2": "I'm _or_y."
        },
        {
            "VN": "Hôm nay là 25 tháng 8.",
            "EN": "It's August 25th.",
            "SortEN1": "It's Augus_ 2__h.",
            "SortEN2": "_t'_ Au_u__ _5_h."
        },
        {
            "VN": "Mùng 3 tháng 6.",
            "EN": "June 3rd.",
            "SortEN1": "_u_e 3rd_",
            "SortEN2": "___e 3_d_"
        },
        {
            "VN": "Thức ăn ngon.",
            "EN": "The food was delicious.",
            "SortEN1": "The food w_s de_i_ious.",
            "SortEN2": "___ f_o_ __s d_li__o_s_"
        },
        {
            "VN": "Có vài trái táo trong tủ lạnh.",
            "EN": "There are some apples in the refrigerator.",
            "SortEN1": "Ther_ _re some _pples _n t__ _e_r_gerato__",
            "SortEN2": "The__ are __me _pples _n ___ ___r__erator."
        },
        {
            "VN": "Có một nhà hàng gần đây.",
            "EN": "There's a restaurant near here.",
            "SortEN1": "Th_re'_ a __stau_an_ _ear h_re_",
            "SortEN2": "_h__e_s _ resta__a_t nea_ _ere."
        },
        {
            "VN": "Có một nhà hàng ở đằng kia, nhưng tôi ",
            "EN": "không nghĩ là nó ngon lắm.",
            "SortEN1": "kh_ng ng_ĩ l_ nó ngon _ắm.",
            "SortEN2": "___ng _g_ĩ l_ nó ___n l_m_"
        },
        {
            "VN": "There's a restaurant over there, but I don't",
            "EN": "think it's very good.",
            "SortEN1": "thi__ it_s v_r_ __od.",
            "SortEN2": "_h__k _t_s _e_y g___."
        },
        {
            "VN": "Anh phục vụ!",
            "EN": "Waiter!",
            "SortEN1": "Wa____!",
            "SortEN2": "_a_te_!"
        },
        {
            "VN": "Cô phục vụ!",
            "EN": "Waitress!",
            "SortEN1": "W_itres_!",
            "SortEN2": "________!"
        },
        {
            "VN": "Chúng tôi có thể ăn thức ăn Ý hoặc Trung ",
            "EN": "Hoa.",
            "SortEN1": "_oa.",
            "SortEN2": "Ho__"
        },
        {
            "VN": "We can eat Italian or Chinese food.",
            "EN": "Chúng tôi sẽ dùng 2 ly nước, xin vui lòng.",
            "SortEN1": "Chúng t_i _ẽ _ù_g 2 ly nư__ _in _ui lòng_",
            "SortEN2": "__ú__ ___ _ẽ _ù_g 2 _y nướ_ _in ___ _ò__."
        },
        {
            "VN": "We'll have two glasses of water please.",
            "EN": "Bạn sẽ dùng gì?",
            "SortEN1": "Bạn s_ dùn_ gì?",
            "SortEN2": "___ _ẽ _ù_g gì_"
        },
        {
            "VN": "What are you going to have?",
            "EN": "Bạn đề nghị gì?",
            "SortEN1": "_ạn đề nghị g__",
            "SortEN2": "Bạn _ề _ghị g__"
        },
        {
            "VN": "What do you recommend?",
            "EN": "Bạn muốn uống gì?",
            "SortEN1": "B_n m_ốn u_ng g_?",
            "SortEN2": "Bạ_ m_ốn u_n_ ___"
        },
        {
            "VN": "What would you like to drink?",
            "EN": "Bạn muốn ăn gì?",
            "SortEN1": "Bạn m_ố_ ăn gì_",
            "SortEN2": "B__ __ố_ ăn ___"
        },
        {
            "VN": "What would you like to eat?",
            "EN": "Địa chỉ email của bạn là gì?",
            "SortEN1": "Địa __ỉ e_ai_ _ủa bạn là gì?",
            "SortEN2": "_ịa _h_ _mail __a bạn _à ___"
        },
        {
            "VN": "What's your email address?",
            "EN": "Máy rút tiền tự động ở đâu?",
            "SortEN1": "Má_ _ú_ t_ề_ tự động ở đâ_?",
            "SortEN2": "__y rút ti_n tự _ộn_ ở đâ_?"
        },
        {
            "VN": "Where is an ATM?",
            "EN": "Ở đâu có một bác sĩ nói tiếng Anh?",
            "SortEN1": "Ở đâu có _ột bác sĩ n__ ti_ng __h?",
            "SortEN2": "Ở __u c_ mộ_ ___ sĩ __i _iếng A_h_"
        },
        {
            "VN": "Where is there a doctor who speaks English?",
            "EN": "Cái nào?",
            "SortEN1": "C_i nà_?",
            "SortEN2": "C_i _à_?"
        },
        {
            "VN": "Which one?",
            "EN": "Làm ơn nói anh ta tới đây.",
            "SortEN1": "Làm ơ_ n__ _nh ta tới đâ_.",
            "SortEN2": "_àm ơn n__ ___ t_ t_i đ___"
        },
        {
            "VN": "Would you ask him to come here?",
            "EN": "Bạn muốn một ly nước không?",
            "SortEN1": "Bạn muố_ một ly nướ_ _hông?",
            "SortEN2": "Bạ_ m_ốn m_t ly _ước k__ng_"
        },
        {
            "VN": "Would you like a glass of water?",
            "EN": "Bạn muốn uống cà phê hay trà?",
            "SortEN1": "Bạn _uốn _ốn_ c_ phê h_y _rà?",
            "SortEN2": "_ạ_ m___ uố__ _à __ê h_y ___?"
        },
        {
            "VN": "Would you like coffee or tea?",
            "EN": "Bạn muốn một ít nước không?",
            "SortEN1": "Bạn muốn một ít nước không_",
            "SortEN2": "Bạ_ _uốn ___ __ _ư__ _hô_g_"
        },
        {
            "VN": "Would you like some water?",
            "EN": "Bạn muốn một ít rượu không?",
            "SortEN1": "B_n muốn _ột ít _ượu không?",
            "SortEN2": "_ạ_ muốn _ộ_ í_ ____ __ông?"
        },
        {
            "VN": "Would you like some wine?",
            "EN": "Bạn muốn uống thứ gì không?",
            "SortEN1": "Bạ_ muố_ uố_g _hứ __ k_ô_g?",
            "SortEN2": "B_n mu_n u_n_ __ứ _ì k_ôn_?"
        },
        {
            "VN": "Would you like something to drink?",
            "EN": "Bạn muốn đi dạo không?",
            "SortEN1": "B_n ___n __ dạo _hô_g?",
            "SortEN2": "Bạ_ m___ đi dạ_ _hôn__"
        },
        {
            "VN": "Would you like to go for a walk?",
            "EN": "Bạn muốn xem tivi không?",
            "SortEN1": "Bạn muố_ x_m tiv_ k_ô___",
            "SortEN2": "_ạ_ _u__ x_m t_v_ k_ôn__"
        },
        {
            "VN": "Would you like to watch TV?",
            "EN": "Bạn có phải là người Mỹ không?",
            "SortEN1": "B_n c_ phả_ _à ___ời M_ kh_ng?",
            "SortEN2": "___ __ _h__ là ng_ờ_ _ỹ __ôn_?"
        },
        {
            "VN": "Are you American?",
            "EN": "Tối nay bạn tới không?",
            "SortEN1": "Tối na_ bạn t_i _hôn_?",
            "SortEN2": "_ối _a_ _ạn tới kh____"
        },
        {
            "VN": "Are you coming this evening?",
            "EN": "Tối nay bạn rảnh không?",
            "SortEN1": "T_i nay b__ r__h _hô_g?",
            "SortEN2": "T_i nay bạ_ ____ __ô_g?"
        },
        {
            "VN": "Are you free tonight?",
            "EN": "Bạn sẽ đi máy bay hay tàu hỏa?",
            "SortEN1": "Bạn sẽ _i m_y ba_ ha_ _àu hỏa?",
            "SortEN2": "__n __ đ_ máy bay _a_ tà_ h__?"
        },
        {
            "VN": "Are you going to take a plane or train?",
            "EN": "Bạn có đói không?",
            "SortEN1": "Bạn c_ đó_ kh_ng?",
            "SortEN2": "_ạ_ _ó __i khô___"
        },
        {
            "VN": "Are you hungry?",
            "EN": "Bạn chắc không?",
            "SortEN1": "___ chắc k_ông_",
            "SortEN2": "__n c__c _hông_"
        },
        {
            "VN": "Are you sure?",
            "EN": "Ngày mai bạn có làm việc không?",
            "SortEN1": "Ngày ma_ bạn có là_ v_ệ_ không?",
            "SortEN2": "Ng_y m_i b_n c_ ___ _iệc _hô_g_"
        },
        {
            "VN": "Are you working Tomorrow?",
            "EN": "Việc làm ăn tốt.",
            "SortEN1": "V_ệc l_m __ ___.",
            "SortEN2": "_i__ __m __ tốt_"
        },
        {
            "VN": "Business is good.",
            "EN": "Chúc sức khỏe!",
            "SortEN1": "__úc __c k_ỏe!",
            "SortEN2": "Ch__ _ức khỏe!"
        },
        {
            "VN": "Cheers!",
            "EN": "Trời có tuyết hôm qua không?",
            "SortEN1": "Trờ_ _ó tu_ết h_m qua kh_n_?",
            "SortEN2": "T___ có tuyết hô_ qua _h__g_"
        },
        {
            "VN": "Did it snow yesterday?",
            "EN": "Bạn có nhận được email của tôi không?",
            "SortEN1": "Bạn c_ nhậ_ _ược _mai_ củ_ tôi k_ông_",
            "SortEN2": "B_n __ ____ đư__ _____ của ___ __ô_g_"
        },
        {
            "VN": "Did you get my email?",
            "EN": "Bạn đã uống thuốc chưa?",
            "SortEN1": "Bạ_ _ã uống t_uốc chưa?",
            "SortEN2": "B__ đ_ ____ __uốc c_ư__"
        },
        {
            "VN": "Did you take your medicine?",
            "EN": "Bạn có cảm thấy khỏe hơn không?",
            "SortEN1": "B_n có cảm thấy kh_e hơn _hô_g?",
            "SortEN2": "___ __ __m __ấ_ _h_e h_n k_ô___"
        },
        {
            "VN": "Do you feel better?",
            "EN": "Bạn có thường đi Florida không?",
            "SortEN1": "__n có thư__g đ_ Florida _h_ng?",
            "SortEN2": "___ c_ __ườ__ _i _l__i_a kh_ng_"
        },
        {
            "VN": "Do you go to Florida often?",
            "EN": "Bạn có cái khác không?",
            "SortEN1": "Bạn có cá_ khác _hông?",
            "SortEN2": "_ạ_ __ ___ k_á_ khôn__"
        },
        {
            "VN": "Do you have another one?",
            "EN": "Bạn có biết ở đâu có cửa hàng bán khăn tắm không?",
            "SortEN1": "_ạ_ có biết _ đâ_ _ó c_a hàng bá_ khăn tắm khô__?",
            "SortEN2": "Bạn c_ b_ết ở _â_ _ó __a h___ __n kh_n t_m __ô_g?"
        },
        {
            "VN": "Do you know where there's a store that sells towels?",
            "EN": "Bạn có thích nơi đây không?",
            "SortEN1": "Bạn _ó t_ích nơi đây khô___",
            "SortEN2": "Bạ_ __ th_ch _ơi _â_ kh_n__"
        },
        {
            "VN": "Do you like it here?",
            "EN": "Bạn có thích quyển sách này không?",
            "SortEN1": "Bạn có thí_h qu_ển sách nà_ _hông?",
            "SortEN2": "___ _ó ___ch qu_ển s_c_ ___ __ông?"
        },
        {
            "VN": "Do you like the book?",
            "EN": "Bạn có cần gì không?",
            "SortEN1": "Bạn có cần _ì _hôn_?",
            "SortEN2": "_ạ_ c_ cần gì _h_ng?"
        },
        {
            "VN": "Do you need anything?",
            "EN": "Bạn có chơi môn thể thao nào không?",
            "SortEN1": "Bạn c_ ch_i _ô_ thể tha_ nào không_",
            "SortEN2": "B_n _ó ch_i _ôn t_ể _h_o __o _h____"
        },
        {
            "VN": "Do you play any sports?",
            "EN": "Bạn có bán dược phẩm không? (cửa hàng)",
            "SortEN1": "_ạ_ __ bán dược phẩm khô_g? (c_a _àng)",
            "SortEN2": "_ạ_ _ó ___ _ư__ __ẩ_ khô___ ___a hàn_)"
        },
        {
            "VN": "Do you sell medicine?",
            "EN": "Bạn có học tiếng Anh không?",
            "SortEN1": "Bạn có học ti_ng Anh không?",
            "SortEN2": "B_n c_ ___ t__ng A__ ____g_"
        },
        {
            "VN": "Do you study English?",
            "EN": "Bạn có muốn đi với tôi không?",
            "SortEN1": "Bạn __ _uốn đ_ vớ_ _ô_ không?",
            "SortEN2": "_ạn __ _uố_ đi với tôi ____g?"
        },
        {
            "VN": "Do you want to come with me?",
            "EN": "Bạn có muốn đi với tôi không?",
            "SortEN1": "B_n có muốn đi _ới t_i kh_n_?",
            "SortEN2": "B__ _ó muốn __ ___ _ôi __ô_g_"
        },
        {
            "VN": "Do you want to go with me?",
            "EN": "Xin lỗi.",
            "SortEN1": "Xin lỗi.",
            "SortEN2": "Xi_ __i_"
        },
        {
            "VN": "Excuse me.",
            "EN": "Gọi điện cho tôi.",
            "SortEN1": "Gọi đi_n c_o tôi_",
            "SortEN2": "___ đi__ _ho __i_"
        },
        {
            "VN": "Give me a call.",
            "EN": "Anh (em trai) của bạn đã từng tới California chưa?",
            "SortEN1": "A_h (e_ trai) _ủ_ bạn __ từng t_i Cali_ornia chưa?",
            "SortEN2": "___ _em _rai) c__ __n _ã t_n_ t_i _al___rni_ ch_a_"
        },
        {
            "VN": "Has your brother been to California?",
            "EN": "Họ gặp cô ta chưa?",
            "SortEN1": "_ọ gặp cô ta c_ưa?",
            "SortEN2": "H_ _ặ_ __ __ ch___"
        },
        {
            "VN": "Have they met her yet?",
            "EN": "Bạn đã làm việc này trước đây chưa?",
            "SortEN1": "Bạn đã làm vi_c n__ t_ư_c đây chưa?",
            "SortEN2": "Bạ_ _ã là_ _iệ_ nà_ t_ư_c _ây c___?"
        },
        {
            "VN": "Have you done this before?",
            "EN": "Bạn đã ở đây bao lâu?",
            "SortEN1": "Bạn đã _ đây bao lâu?",
            "SortEN2": "__n đ_ ở đ__ _a_ lâu?"
        },
        {
            "VN": "How long have you been here?",
            "EN": "Bạn đã ở Mỹ bao lâu?",
            "SortEN1": "_ạn __ ở Mỹ ba_ l_u?",
            "SortEN2": "B_n _ã _ _ỹ _a_ __u?"
        },
        {
            "VN": "How long have you been in America?",
            "EN": "Bạn đã sống ở đây bao lâu?",
            "SortEN1": "B_n đã sống ở __y _ao lâ_?",
            "SortEN2": "___ __ __n_ _ ___ b_o lâu?"
        },
        {
            "VN": "How long have you lived here?",
            "EN": "Bạn có bao nhiêu người con?",
            "SortEN1": "Bạn có __o n__êu người _on_",
            "SortEN2": "Bạ_ _ó b__ nh___ __ư_i con?"
        },
        {
            "VN": "How many children do you have?",
            "EN": "Bạn nói bao nhiêu ngôn ngữ?",
            "SortEN1": "Bạn _ó_ ba_ __iêu __ôn ngữ_",
            "SortEN2": "B_n __i b__ nh___ n_ô_ n_ữ_"
        },
        {
            "VN": "How many languages do you speak?",
            "EN": "Bạn có bao nhiêu người trong gia đình?",
            "SortEN1": "Bạn __ bao _hiêu n_ười _rong g_a đì_h_",
            "SortEN2": "_ạ_ _ó b__ n_i_u ng___ _ron_ _i_ đ_n__"
        },
        {
            "VN": "How many people do you have in your family?",
            "EN": "Bạn muốn bao nhiêu?",
            "SortEN1": "__n _u_n _ao nh_êu?",
            "SortEN2": "_ạn ___n ba_ n___u?"
        },
        {
            "VN": "How much would you like?",
            "EN": "Bạn bao nhiêu tuổi?",
            "SortEN1": "B_n _a_ n_iê_ __ổi?",
            "SortEN2": "_ạ_ b_o __iêu _u_i?"
        },
        {
            "VN": "How old are you?",
            "EN": "Hôm qua tôi mua một cái áo sơ mi.",
            "SortEN1": "Hôm qua tô_ mua một _ái áo sơ mi.",
            "SortEN2": "__m q_a _ôi __a m__ _á_ áo __ ___"
        },
        {
            "VN": "I bought a shirt yesterday.",
            "EN": "Tôi không cảm thấy khỏe.",
            "SortEN1": "Tôi _hô_g cảm th_y kh_e.",
            "SortEN2": "Tôi không _ả_ _hấ_ k___."
        },
        {
            "VN": "I don't feel well.",
            "EN": "Tôi bị đau ở tay.",
            "SortEN1": "Tôi _ị đ_u ở t_y.",
            "SortEN2": "___ bị ___ ở __y_"
        },
        {
            "VN": "I have pain in my arm.",
            "EN": "Tôi phải giặt quần áo.",
            "SortEN1": "T_i p_ả_ giặt quần áo.",
            "SortEN2": "T_i phả_ g_ặ_ qu__ á_."
        },
        {
            "VN": "I have to wash my clothes.",
            "EN": "Tôi có 2 người chị (em gái).",
            "SortEN1": "Tô_ có 2 người chị (__ gái).",
            "SortEN2": "Tô_ có 2 _gười c_ị __m g_i_."
        },
        {
            "VN": "I have two sisters.",
            "EN": "Tôi nhớ.",
            "SortEN1": "__i nhớ.",
            "SortEN2": "___ _h_."
        },
        {
            "VN": "I remember.",
            "EN": "Tôi nói một chút tiếng Anh.",
            "SortEN1": "Tôi _ói m_t c_ú_ _iến_ _nh_",
            "SortEN2": "___ ___ một ch_t __ến_ _n__"
        },
        {
            "VN": "I speak a little English.",
            "EN": "Tôi sẽ nói với anh ta là bạn đã gọi điện.",
            "SortEN1": "T_i s_ nói với anh t_ là bạn đã gọ_ đi_n.",
            "SortEN2": "Tôi s_ n__ _ớ_ _nh __ __ _ạn _ã gọ_ đ__n."
        },
        {
            "VN": "I'll tell him you called.",
            "EN": "Tôi 32",
            "SortEN1": "Tôi 32",
            "SortEN2": "__i 3_"
        },
        {
            "VN": "I'm 32.",
            "EN": "Tôi cao 6'2\"",
            "SortEN1": "T_i cao 6'2\"",
            "SortEN2": "_ô_ c_o 6'2_"
        },
        {
            "VN": "I'm 6'2\".",
            "EN": "Tôi cỡ 8",
            "SortEN1": "_ôi cỡ 8",
            "SortEN2": "__i __ 8"
        },
        {
            "VN": "I'm a size 8.",
            "EN": "Tôi dị ứng hải sản.",
            "SortEN1": "Tôi dị ứ_g _ải sản_",
            "SortEN2": "__i d_ ứn_ h_i _ản."
        },
        {
            "VN": "I'm allergic to seafood.",
            "EN": "Tôi là người Mỹ.",
            "SortEN1": "T__ là người Mỹ.",
            "SortEN2": "T_i là n_ười _ỹ_"
        },
        {
            "VN": "I'm American.",
            "EN": "Tôi khỏe, còn bạn?",
            "SortEN1": "Tôi _h_e _ò_ b_n_",
            "SortEN2": "T_i _h_e_ __n __n?"
        },
        {
            "VN": "I'm fine, and you?",
            "EN": "Tôi không sợ.",
            "SortEN1": "_ô_ _hông sợ_",
            "SortEN2": "_ô_ _____ _ợ_"
        },
        {
            "VN": "I'm not afraid.",
            "EN": "Tôi ốm.",
            "SortEN1": "Tôi ốm_",
            "SortEN2": "___ ố__"
        },
        {
            "VN": "I'm sick.",
            "EN": "Nhà của bạn có giống căn nhà này không?",
            "SortEN1": "Nhà của _ạn có giốn_ că_ nhà này khô_g?",
            "SortEN2": "N__ của b_n có _i_ng c__ _hà _ày _h_ng?"
        },
        {
            "VN": "Is your house like this one?",
            "EN": "Chồng của bạn cũng từ Boston hả?",
            "SortEN1": "C_ồng của __n __ng _ừ B_s__n hả?",
            "SortEN2": "Ch_ng __a b__ c_n_ _ừ ___t_n h_?"
        },
        {
            "VN": "Is your husband also from Boston?",
            "EN": "Nó không đắt lắm.",
            "SortEN1": "Nó không đ_t lắm.",
            "SortEN2": "N_ _h___ __t _ắm_"
        },
        {
            "VN": "It's not very expensive.",
            "EN": "Tôi đã ở đó.",
            "SortEN1": "_ôi đã ở _ó.",
            "SortEN2": "___ đ_ _ __."
        },
        {
            "VN": "I've been there.",
            "EN": "Chúng ta hãy chia nhau.",
            "SortEN1": "Chún_ ta h_y chia nh_u.",
            "SortEN2": "C___g _a ___ c_i_ __a__"
        },
        {
            "VN": "Let's share.",
            "EN": "Con gái tôi ở đây.",
            "SortEN1": "Co_ gái tôi ở đây_",
            "SortEN2": "_o_ _á_ t_i _ _â_."
        },
        {
            "VN": "My daughter is here.",
            "EN": "Bố tôi đã ở đó.",
            "SortEN1": "Bố tô_ đã _ đó.",
            "SortEN2": "__ t__ đ_ ở _ó."
        },
        {
            "VN": "My father has been there.",
            "EN": "Bố tôi là luật sư.",
            "SortEN1": "Bố _ôi là luật sư.",
            "SortEN2": "__ t__ l_ l_ật sư_"
        },
        {
            "VN": "My father is a lawyer.",
            "EN": "Bà tôi mất hồi năm ngoái.",
            "SortEN1": "Bà tôi mấ_ hồ_ ___ n_o_i.",
            "SortEN2": "B_ t__ __t ___ __m ng____"
        },
        {
            "VN": "My grandmother passed away last year.",
            "EN": "Tên tôi là John Smith.",
            "SortEN1": "Tên _ô_ là John Smi_h.",
            "SortEN2": "T__ _ô_ __ Joh_ _mi__."
        },
        {
            "VN": "My name is John Smith.",
            "EN": "Con trai tôi học máy tính.",
            "SortEN1": "Co_ trai _ô_ học máy tín_.",
            "SortEN2": "_on t_a_ __i họ_ __y t_nh_"
        },
        {
            "VN": "My son studies computers.",
            "EN": "Con trai tôi.",
            "SortEN1": "Con tra_ t_i.",
            "SortEN2": "Co_ _r__ t_i."
        },
        {
            "VN": "My son.",
            "EN": "Không. Tôi là người Mỹ.",
            "SortEN1": "Không_ Tô_ là n_ư_i __.",
            "SortEN2": "Kh__g_ ___ _à n_ư_i M_."
        },
        {
            "VN": "No, I'm American.",
            "EN": "Không, đây là lần đầu tiên.",
            "SortEN1": "K_ô_g đ_y là l_n đ_u t_ê_.",
            "SortEN2": "Khôn_ đây __ _ần _ầu tiên_"
        },
        {
            "VN": "No, this is the first time.",
            "EN": "Các con tôi ở Mỹ.",
            "SortEN1": "Cá_ con tôi ở M_.",
            "SortEN2": "Các _o_ tôi ở Mỹ."
        },
        {
            "VN": "Our children are in America.",
            "EN": "Cô ta là chuyên gia.",
            "SortEN1": "Cô _a là ch___n g_a.",
            "SortEN2": "Cô __ __ ch_yê_ ___."
        },
        {
            "VN": "She's an expert.",
            "EN": "Cô ta lớn tuổi hơn tôi.",
            "SortEN1": "__ ta _ớn tu__ _ơn tôi.",
            "SortEN2": "_ô t_ _ớ_ tu__ ___ _ô__"
        },
        {
            "VN": "She's older than me.",
            "EN": "Chiếc xe đó giống xe của tôi.",
            "SortEN1": "_h__c __ đ_ g_ốn_ xe của _ôi_",
            "SortEN2": "_h__c x_ đó g_ố_g _e _ủa ____"
        },
        {
            "VN": "That car is similar to my car.",
            "EN": "Đây là bà Smith.",
            "SortEN1": "Đây là _à Smith.",
            "SortEN2": "Đ_y __ bà _m_th."
        },
        {
            "VN": "This is Mrs. Smith.",
            "EN": "Đây là mẹ tôi.",
            "SortEN1": "Đây là mẹ tô__",
            "SortEN2": "_â_ _à mẹ tô_."
        },
        {
            "VN": "This is my mother.",
            "EN": "Đây là lần đầu tiên tôi ở đây.",
            "SortEN1": "_â_ là lần đầu _iê_ tôi _ đâ__",
            "SortEN2": "__y l_ lần đầ_ tiê_ __i _ _â_."
        },
        {
            "VN": "This is the first time I've been here.",
            "EN": "Chúng tôi có hai trai và một gái.",
            "SortEN1": "Ch_ng tôi c_ hai t___ và m__ __i.",
            "SortEN2": "Ch___ _ôi _ó ha_ _rai _à __t _ái."
        },
        {
            "VN": "We have two boys and one girl.",
            "EN": "Bạn sẽ làm gì tối nay?",
            "SortEN1": "B__ _ẽ là_ gì tối nay?",
            "SortEN2": "Bạn s_ ___ gì t_i __y?"
        },
        {
            "VN": "What are you going to do tonight?",
            "EN": "Thú vui của bạn là gì?",
            "SortEN1": "T__ vui của _ạn là _ì_",
            "SortEN2": "___ vui ___ bạ_ l_ _ì?"
        },
        {
            "VN": "What are your hobbies?",
            "EN": "Bạn học gì?",
            "SortEN1": "_ạn học g_?",
            "SortEN2": "Bạ_ _ọ_ _ì?"
        },
        {
            "VN": "What do you study?",
            "EN": "Bạn muốn làm gì?",
            "SortEN1": "Bạ_ ___n làm gì_",
            "SortEN2": "_ạ_ _u_n _àm gì_"
        },
        {
            "VN": "What do you want to do?",
            "EN": "Bạn đã đi học trường nào?",
            "SortEN1": "Bạ_ _ã đi _ọc trườ_g _à_?",
            "SortEN2": "Bạn đã đ_ họ_ t_ư_n_ ___?"
        },
        {
            "VN": "What school did you go to?",
            "EN": "Bộ phim ưa thích của bạn là phim gì?",
            "SortEN1": "_ộ _h__ ưa thí_h của b_n là p_im gì?",
            "SortEN2": "_ộ _h__ ưa ___c_ củ_ _ạn là ___m g__"
        },
        {
            "VN": "What's your favorite movie?",
            "EN": "Họ của bạn là gì?",
            "SortEN1": "_ọ của bạn là _ì?",
            "SortEN2": "H_ ___ _ạ_ __ _ì_"
        },
        {
            "VN": "What's your last name?",
            "EN": "Tên của bạn là gì?",
            "SortEN1": "Tên củ_ _ạn là g_?",
            "SortEN2": "Tên củ_ bạn là gì_"
        },
        {
            "VN": "What's your name?",
            "EN": "Áo thun ở đâu?",
            "SortEN1": "Áo t_u_ _ đâu?",
            "SortEN2": "Áo ___n ở ____"
        },
        {
            "VN": "Where are the t-shirts?",
            "EN": "Bạn đã đi đâu?",
            "SortEN1": "Bạn đ_ đi đâu?",
            "SortEN2": "__n _ã _i _âu_"
        },
        {
            "VN": "Where did you go?",
            "EN": "Bạn đã học tiếng Anh ở đâu?",
            "SortEN1": "Bạn đ_ _ọc tiếng Anh ở đâu?",
            "SortEN2": "_ạn đ_ ___ t_ế_g _n_ _ ___?"
        },
        {
            "VN": "Where did you learn English?",
            "EN": "Bạn đã làm việc ở đâu trước khi bạn làm việc ở đây?",
            "SortEN1": "B_n đ_ là_ việc ở đâu t_ước _hi bạn _àm _iệc ở đ_y?",
            "SortEN2": "___ __ l__ vi_c _ _âu ____c ___ ___ _àm ____ ở ____"
        },
        {
            "VN": "Where did you work before you worked here?",
            "EN": "Bạn sống ở đâu?",
            "SortEN1": "Bạn sống ở đ_u?",
            "SortEN2": "___ ____ _ đâ_?"
        },
        {
            "VN": "Where do you live?",
            "EN": "Bạn đã ở đâu?",
            "SortEN1": "Bạ_ đã ở đâ_?",
            "SortEN2": "B_n đã ở _âu?"
        },
        {
            "VN": "Where were you?",
            "EN": "Ai đã gửi lá thư này?",
            "SortEN1": "Ai đã gửi lá t_ư này?",
            "SortEN2": "__ đã _ử_ lá ___ _ày?"
        },
        {
            "VN": "Who sent this letter?",
            "EN": "Bạn muốn mua cái này không?",
            "SortEN1": "_ạn m__n mua ___ này _hông?",
            "SortEN2": "_ạn _u__ __a cá_ n_y _hô_g_"
        },
        {
            "VN": "Would you like to buy this?",
            "EN": "Bạn nói tiếng Anh rất giỏi.",
            "SortEN1": "B_n _ói _iế_g _nh rấ_ giỏ__",
            "SortEN2": "B_n _ói __ế__ _nh rấ_ _iỏi_"
        },
        {
            "VN": "You speak English very well.",
            "EN": "Các con của bạn rất ngoan.",
            "SortEN1": "C_c __n __a bạn rất n_oan.",
            "SortEN2": "Cá_ co_ ___ __n ___ n___n_"
        },
        {
            "VN": "Your children are very well behaved.",
            "EN": "Con gái của bạn.",
            "SortEN1": "__n _ái __a bạn_",
            "SortEN2": "___ ___ c_a b___"
        },
        {
            "VN": "Your daughter.",
            "EN": "Bạn thông minh hơn anh ta.",
            "SortEN1": "Bạn _h___ mi_h hơ_ an_ t__",
            "SortEN2": "_ạ_ _hô__ mi_h h__ ___ t_."
        },
        {
            "VN": "You're smarter than him.",
            "EN": "Có buổi hòa nhạc nào không?",
            "SortEN1": "Có buổi hòa nhạc n_o khôn__",
            "SortEN2": "C_ buổi hò_ nhạc ___ khô__?"
        },
        {
            "VN": "Are there any concerts?",
            "EN": "Bạn có muốn đi xem phim không?",
            "SortEN1": "_ạn có muố_ đi xem phim khôn_?",
            "SortEN2": "___ __ mu__ _i x_m p_im ____g_"
        },
        {
            "VN": "Do you want to go to the movies?",
            "EN": "Bạn đã xem phim này chưa?",
            "SortEN1": "_ạn đ_ _em phim này ch_a?",
            "SortEN2": "Bạn đ_ _em p__m n__ ch___"
        },
        {
            "VN": "Have you seen this movie?",
            "EN": "Anh ta nói bạn thích xem phim.",
            "SortEN1": "Anh ta _ói bạn thích xem phi_.",
            "SortEN2": "A_h ta _ói _ạn _____ x_m _h___"
        },
        {
            "VN": "He said you like to watch movies.",
            "EN": "Bạn cao bao nhiêu?",
            "SortEN1": "Bạ_ ca_ bao nhiêu?",
            "SortEN2": "B__ c_o _a_ __iêu_"
        },
        {
            "VN": "How tall are you?",
            "EN": "Ngân hàng có xa không?",
            "SortEN1": "Ngân _àng _ó xa _hôn_?",
            "SortEN2": "_g_n __n_ có __ kh_n_?"
        },
        {
            "VN": "Is the bank far?",
            "EN": "Có rạp chiếu phim gần đây không?",
            "SortEN1": "Có rạp __iế_ phim gần đây k_ông?",
            "SortEN2": "__ _ạ_ ___ếu phim _ần đâ_ k_ô___"
        },
        {
            "VN": "Is there a movie theater nearby?",
            "EN": "Người ta thường làm gì vào mùa hè ở Los Angeles?",
            "SortEN1": "N_ườ_ ta t_ườ__ làm g_ vào m_a hè ở _os Ange_e__",
            "SortEN2": "_gườ_ _a _hườ_g là_ gì _à_ mùa _è ở _os A_g__es_"
        },
        {
            "VN": "What do people usually do in the summer in Los Angeles?",
            "EN": "Bạn thích loại nhạc gì?",
            "SortEN1": "B_n thíc_ loại n_ạ_ gì?",
            "SortEN2": "Bạn _____ loạ_ _hạc g_?"
        },
        {
            "VN": "What kind of music do you like?",
            "EN": "Mấy giờ phim bắt đầu?",
            "SortEN1": "_ấy giờ __im bắ_ _ầu_",
            "SortEN2": "_ấ_ _i_ _h__ bắt ____"
        },
        {
            "VN": "What time does the movie start?",
            "EN": "Thức ăn ưa thích của bạn là gì?",
            "SortEN1": "_h_c ăn ưa thí_h _ủa bạn l_ _ì_",
            "SortEN2": "_h__ _n ư_ _hí__ của bạ_ l_ _ì_"
        },
        {
            "VN": "What's your favorite food?",
            "EN": "Ai đã là thày giáo của bạn?",
            "SortEN1": "Ai đã là t__y giá_ ___ bạ_?",
            "SortEN2": "Ai đ_ _à thà_ g__o _ủ_ bạn_"
        },
        {
            "VN": "Who was your teacher?",
            "EN": "Bạn muốn ăn tối với tôi không?",
            "SortEN1": "Bạ_ m_ốn ăn t__ _ới _ô_ khôn__",
            "SortEN2": "_ạn mu_n _n tối _ớ_ _ôi k_ô__?"
        },
        {
            "VN": "Would you like to have dinner with me?",
            "EN": "Bạn muốn thuê phim không?",
            "SortEN1": "_ạn m_ốn thuê ph_m k___g?",
            "SortEN2": "Bạ_ m___ th_ê _hi_ _hô_g?"
        },
        {
            "VN": "Would you like to rent a movie?",
            "EN": "Làm ơn cho một ly nước.",
            "SortEN1": "_àm ơn ch_ m_t ly n___.",
            "SortEN2": "_àm __ c__ m_t __ n_ớ_."
        },
        {
            "VN": "Can I have a glass of water please?",
            "EN": "Tôi có thể sử dụng điện thoại của bạn không?",
            "SortEN1": "Tôi __ t_ể sử _ụ_g _iện thoạ_ của _ạn k_ông?",
            "SortEN2": "Tô_ c_ _h_ _ử _ụ__ điện _h___ củ_ _ạ_ kh_ng_"
        },
        {
            "VN": "Can I use your phone?",
            "EN": "Bạn có chỗ trống không?",
            "SortEN1": "Bạn có c_ỗ _rống không?",
            "SortEN2": "B_n có chỗ ___n_ _h__g_"
        },
        {
            "VN": "Do you have any vacancies?",
            "EN": "Bạn có số điện thoại để gọi tắc xi không?",
            "SortEN1": "Bạn có số đi_n th_ại _ể gọi t__ x_ k_ông?",
            "SortEN2": "__n __ s_ ____ _h___ __ g__ t__ _i k__ng_"
        },
        {
            "VN": "Do you have the number for a taxi?",
            "EN": "Bạn có biết cô ta không?",
            "SortEN1": "_ạn _ó biết cô t_ kh_ng?",
            "SortEN2": "_ạ_ có b___ _ô __ __ô__?"
        },
        {
            "VN": "Do you know her?",
            "EN": "Bạn có biết cô ấy ở đâu không?",
            "SortEN1": "B_n có bi_t cô ấy ở đ_u _hông?",
            "SortEN2": "Bạ_ __ bi_t _ô __ _ __u __ô__?"
        },
        {
            "VN": "Do you know where she is?",
            "EN": "Bạn có chơi bóng rổ không?",
            "SortEN1": "B_n c_ _h__ bóng r_ khô_g?",
            "SortEN2": "B__ có ___i _ón_ rổ _h_ng_"
        },
        {
            "VN": "Do you play basketball?",
            "EN": "Làm ơn đổ đầy. (cây xăng)",
            "SortEN1": "Làm ơn _ổ đầy. (_ây xăng)",
            "SortEN2": "L__ _n đổ _ầ_. __â_ _ă_g)"
        },
        {
            "VN": "Fill it up, please.",
            "EN": "Anh ta cần một ít quần áo mới.",
            "SortEN1": "Anh t_ c_n _ột ít q_ần áo m_i.",
            "SortEN2": "__h _a _ần mộ_ _t qu__ áo ___."
        },
        {
            "VN": "He needs some new clothes.",
            "EN": "Cái đó giá bao nhiêu?",
            "SortEN1": "__i đó __á b_o n_i_u?",
            "SortEN2": "__i đó g__ _a_ _h_ê_?"
        },
        {
            "VN": "How much is that?",
            "EN": "Cái này giá bao nhiêu?",
            "SortEN1": "C_i này __á bao nhiêu_",
            "SortEN2": "C__ này giá __o _hi_u_"
        },
        {
            "VN": "How much is this?",
            "EN": "Tôi tin bạn.",
            "SortEN1": "Tôi tin _ạn.",
            "SortEN2": "_ô_ _i_ __n_"
        },
        {
            "VN": "I believe you.",
            "EN": "Tôi nói 2 thứ tiếng.",
            "SortEN1": "Tôi nói 2 thứ tiếng_",
            "SortEN2": "Tôi ___ _ th_ t__n__"
        },
        {
            "VN": "I speak two languages.",
            "EN": "Tôi nghĩ anh ta đã nói một điều gì khác.",
            "SortEN1": "Tôi nghĩ a__ ta đã nó_ một _iề_ gì khác.",
            "SortEN2": "T_i ngh_ __h t_ đã _ói _ộ_ _iề_ __ _____"
        },
        {
            "VN": "I thought he said something else.",
            "EN": "Tôi thường uống cà phê vào bữa điểm tâm.",
            "SortEN1": "T__ _h__ng uố_g c_ phê vào bữa điểm _âm_",
            "SortEN2": "Tô_ t_ư_n_ u___ __ p_ê và_ __a đi__ tâ_."
        },
        {
            "VN": "I usually drink coffee at breakfast.",
            "EN": "Tôi muốn số điện thoại của khách sạn Hilton, xin vui lòng.",
            "SortEN1": "Tôi _uốn _ố đi_n thoại _ủa _hách sạn _ilton xin vui lòng_",
            "SortEN2": "T_i m_ố_ s_ đi_n ___ạ_ củ_ k____ sạ_ ___t__ _in _ui lò_g_"
        },
        {
            "VN": "I'd like the number for the Hilton Hotel please.",
            "EN": "Tôi muốn mua một tấm thẻ điện thoại, xin vui lòng.",
            "SortEN1": "T__ _uốn mua một __m thẻ điện t_oại xin vui lòng.",
            "SortEN2": "Tôi mu_n m__ __t ___ th_ đ___ _h__i_ xi_ _u_ lòng."
        },
        {
            "VN": "I'd like to buy a phone card please.",
            "EN": "Tôi muốn về nhà.",
            "SortEN1": "_ôi muốn về nh_.",
            "SortEN2": "Tô_ muố_ __ nh_."
        },
        {
            "VN": "I'd like to go home.",
            "EN": "Tôi muốn đi mua sắm.",
            "SortEN1": "T__ muốn __ _u_ s_m.",
            "SortEN2": "_ôi muốn đi m__ __m."
        },
        {
            "VN": "I'd like to go shopping.",
            "EN": "Nếu bạn thích nó tôi có thể mua thêm.",
            "SortEN1": "___ b__ _h_ch n_ t__ _ó thể _ua th_m_",
            "SortEN2": "Nế_ bạ_ _híc_ __ _ôi __ ___ __a ____."
        },
        {
            "VN": "If you like it I can buy more.",
            "EN": "Tôi mới bắt đầu.",
            "SortEN1": "Tôi _ới bắt _ầ_.",
            "SortEN2": "_ôi m__ _ắt đ___"
        },
        {
            "VN": "I'm a beginner.",
            "EN": "Tôi no rồi.",
            "SortEN1": "_ôi n_ rồi.",
            "SortEN2": "Tôi n_ r___"
        },
        {
            "VN": "I'm full.",
            "EN": "Tôi chỉ đùa thôi.",
            "SortEN1": "Tôi chỉ đùa thô_.",
            "SortEN2": "Tô_ _hỉ đù_ t____"
        },
        {
            "VN": "I'm just kidding.",
            "EN": "Tôi độc thân.",
            "SortEN1": "Tôi độc thân.",
            "SortEN2": "__i độ_ _h__."
        },
        {
            "VN": "I'm single.",
            "EN": "Nó không xa lắm.",
            "SortEN1": "Nó k_ô_g xa l__.",
            "SortEN2": "_ó kh__g x_ _ắm."
        },
        {
            "VN": "It's not too far.",
            "EN": "Xin lỗi, chúng tôi không có cái nào.",
            "SortEN1": "Xin lỗi __úng _ôi _hôn_ có cái nào.",
            "SortEN2": "_i_ lỗi ch_ng _ô_ kh__g c_ cái __o_"
        },
        {
            "VN": "Sorry, we don't have any.",
            "EN": "Những quyển sách đắt tiền.",
            "SortEN1": "Nh_n_ quy__ s_c_ đắt tiền.",
            "SortEN2": "_h_ng ___ể_ ___h đắt ti___"
        },
        {
            "VN": "The books are expensive.",
            "EN": "Mặc thử nó.",
            "SortEN1": "_ặc thử nó.",
            "SortEN2": "Mặc th_ nó."
        },
        {
            "VN": "Try it on.",
            "EN": "Bạn muốn mua gì?",
            "SortEN1": "B_n muố_ m_a gì_",
            "SortEN2": "___ ____ _ua gì_"
        },
        {
            "VN": "What do you want to buy?",
            "EN": "Cỡ mấy?",
            "SortEN1": "_ỡ _ấy_",
            "SortEN2": "_ỡ ___?"
        },
        {
            "VN": "What size?",
            "EN": "Mấy giờ cửa hàng mở cửa?",
            "SortEN1": "Mấy _i_ _ửa h_ng mở cửa?",
            "SortEN2": "M_y g_ờ __a ___g m_ c__?"
        },
        {
            "VN": "What time does the store open?",
            "EN": "Khi nào máy bay tới?",
            "SortEN1": "Khi n_o m__ __y tới?",
            "SortEN2": "___ nà_ m__ _a_ tới_"
        },
        {
            "VN": "When does the plane arrive?",
            "EN": "Bạn ở đâu?",
            "SortEN1": "__n ở đ_u?",
            "SortEN2": "__n _ ___?"
        },
        {
            "VN": "Where are you?",
            "EN": "Bạn muốn ăn thứ gì không?",
            "SortEN1": "Bạn muốn ă_ __ứ gì k_ô__?",
            "SortEN2": "B_n m_ố_ ă_ t_ứ g_ k_ô__?"
        },
        {
            "VN": "Would you like something to eat?",
            "EN": "Tôi phát âm nó đúng không?",
            "SortEN1": "Tô_ phát âm nó đ_ng không?",
            "SortEN2": "T__ phá_ _m __ ____ kh_n_?"
        },
        {
            "VN": "Am I pronouncing it correctly?",
            "EN": "Bạn có thể giúp tôi một việc được không?",
            "SortEN1": "Bạ_ _ó _hể gi_p t_i một _iệc _ư_c k_ô_g_",
            "SortEN2": "__n __ thể _iú_ ___ mộ_ _iệc ____ kh__g_"
        },
        {
            "VN": "Can you do me a favor?",
            "EN": "Bạn có thể giúp tôi không?",
            "SortEN1": "B_n có _hể giúp tôi _hô_g_",
            "SortEN2": "B_n có _h_ gi_p _ô_ _h___?"
        },
        {
            "VN": "Can you help me?",
            "EN": "Bạn có thể nói lại điều đó được không?",
            "SortEN1": "B_n _ó thể nói l_i đi_u __ đ___ k_ôn__",
            "SortEN2": "__n c_ thể n_i _ại _i__ __ đ___ _h__g_"
        },
        {
            "VN": "Can you please say that again?",
            "EN": "Bạn có thể chỉ cho tôi không?",
            "SortEN1": "_ạn có _hể chỉ cho tôi kh__g?",
            "SortEN2": "_ạn _ó thể ___ _ho _ôi kh___?"
        },
        {
            "VN": "Can you show me?",
            "EN": "Bạn có thể quẳng cái đó đi giúp tôi được không?",
            "SortEN1": "Bạn _ó t_ể quẳ_g _ái đó đi giúp tôi đư_c khôn_?",
            "SortEN2": "B__ c_ ___ q_ẳ__ ___ __ đ_ _i_p _ôi đ___ kh__g_"
        },
        {
            "VN": "Can you throw that away for me?",
            "EN": "Bạn có tin điều đó không?",
            "SortEN1": "Bạn _ó tin đ_ều đ_ __ông?",
            "SortEN2": "_ạn __ tin _iề_ __ _hôn__"
        },
        {
            "VN": "Do you believe that?",
            "EN": "Bạn có bút chì không?",
            "SortEN1": "__n có __t chì khô_g_",
            "SortEN2": "___ c_ bú_ chì k_ông_"
        },
        {
            "VN": "Do you have a pencil?",
            "EN": "Bạn có hút thuốc không?",
            "SortEN1": "_ạn có hút t__ốc kh_n__",
            "SortEN2": "_ạ_ c_ h_t th_ố_ __ông?"
        },
        {
            "VN": "Do you smoke?",
            "EN": "Bạn có nói tiếng Anh không?",
            "SortEN1": "Bạn c_ nó_ _iếng Anh không_",
            "SortEN2": "__n _ó _ó_ ___n_ Anh _____?"
        },
        {
            "VN": "Do you speak English?",
            "EN": "Có ai ở đây nói tiếng Anh không?",
            "SortEN1": "C_ ai _ đ_y n_i t_ế__ A__ _h_n_?",
            "SortEN2": "_ó __ ở ___ nói __ế__ ___ k_____"
        },
        {
            "VN": "Does anyone here speak English?",
            "EN": "Đừng làm điều đó.",
            "SortEN1": "Đ_n_ làm đ_ều _ó.",
            "SortEN2": "Đừ_g ___ điều đó_"
        },
        {
            "VN": "Don't do that.",
            "EN": "Xin lỗi, bạn nói gì?",
            "SortEN1": "_in l__ bạn _ói gì?",
            "SortEN2": "Xin lỗi_ b__ nó_ _ì_"
        },
        {
            "VN": "Excuse me, what did you say?",
            "EN": "Quên đi.",
            "SortEN1": "Qu__ đi.",
            "SortEN2": "Quên __."
        },
        {
            "VN": "Forget it.",
            "EN": "Bạn phát âm chữ đó như thế nào?",
            "SortEN1": "__n _há_ __ chữ đ_ n_ư t_ế nà__",
            "SortEN2": "_ạ_ _h_t â_ _h_ __ như t__ _à__"
        },
        {
            "VN": "How do you pronounce that?",
            "EN": "Bạn nói điều đó bằng tiếng Anh như thế nào?",
            "SortEN1": "Bạn n__ __ề_ _ó b_ng _iến_ An_ __ư _hế n_o_",
            "SortEN2": "B_n __i đ__u _ó b_ng ti__g A_h n__ ___ _ào_"
        },
        {
            "VN": "How do you say it in English?",
            "EN": "Bạn đánh vần nó như thế nào?",
            "SortEN1": "_ạn __nh vần n_ nh_ th_ nào?",
            "SortEN2": "_ạ_ _ánh v__ n_ n__ _h_ nà__"
        },
        {
            "VN": "How do you spell it?",
            "EN": "Bạn đánh vần chữ Seattle như thế nào?",
            "SortEN1": "Bạn đánh vần ch_ Sea_tl_ n_ư th_ __o?",
            "SortEN2": "___ đ_n_ vần _hữ Se___le _hư t_ế n_o_"
        },
        {
            "VN": "How do you spell the word Seattle?",
            "EN": "Tôi có thể bơi.",
            "SortEN1": "Tô_ có _hể bơi.",
            "SortEN2": "__i có __ể b__."
        },
        {
            "VN": "I can swim.",
            "EN": "Tôi nghe bạn không rõ.",
            "SortEN1": "Tôi n_he bạn kh_n_ rõ.",
            "SortEN2": "T__ ng_e _ạn khô__ _õ."
        },
        {
            "VN": "I can't hear you clearly.",
            "EN": "Tôi không quan tâm.",
            "SortEN1": "_ôi _hô__ __an tâm.",
            "SortEN2": "_ô_ kh_ng q__n _âm_"
        },
        {
            "VN": "I don't mind.",
            "EN": "Tôi không nói tiếng Anh giỏi lắm.",
            "SortEN1": "__i k__ng nói tiếng Anh giỏ_ lắm_",
            "SortEN2": "T_i _h__g nó_ ___ng A__ g_ỏ_ l__."
        },
        {
            "VN": "I don't speak English very well.",
            "EN": "Tôi không nghĩ vậy.",
            "SortEN1": "T_i _hôn_ nghĩ vậy.",
            "SortEN2": "__i __ô__ ___ĩ vậy."
        },
        {
            "VN": "I don't think so.",
            "EN": "Tôi không hiểu bạn nói gì.",
            "SortEN1": "_ôi _h_ng hiểu bạ_ ___ g_.",
            "SortEN2": "T_i _h_ng hi_u ___ n__ g_."
        },
        {
            "VN": "I don't understand what your saying.",
            "EN": "Tôi nghĩ bạn có nhiều quần áo quá.",
            "SortEN1": "Tôi ng__ b__ _ó nh_ều quần á_ quá.",
            "SortEN2": "T__ _g__ b_n _ó _hiề_ _uầ_ _o _u_."
        },
        {
            "VN": "I think you have too many clothes.",
            "EN": "Tôi tin bạn.",
            "SortEN1": "Tôi tin bạ_.",
            "SortEN2": "Tôi _in b___"
        },
        {
            "VN": "I trust you.",
            "EN": "Bây giờ tôi hiểu.",
            "SortEN1": "Bây gi_ t_i hiể_.",
            "SortEN2": "_ây gi_ __i _i___"
        },
        {
            "VN": "I understand now.",
            "EN": "Trong phòng có điều hòa không khí không?",
            "SortEN1": "Tr__g phòng có đ_ề_ _òa khô_g kh_ kh_ng_",
            "SortEN2": "T__ng p____ c_ điều __a k___g k_í kh__g?"
        },
        {
            "VN": "Is there air conditioning in the room?",
            "EN": "Chúng ta hãy gặp nhau trước khách sạn.",
            "SortEN1": "Chúng t_ hãy gặp _hau tr_ớc k__ch __n.",
            "SortEN2": "C___g t_ __y g_p ____ __ư_c __á__ ___."
        },
        {
            "VN": "Let's meet in front of the hotel.",
            "EN": "Xin mời ngồi.",
            "SortEN1": "_in _ời ngồi.",
            "SortEN2": "X_n mời __ồ_."
        },
        {
            "VN": "Please sit down.",
            "EN": "Làm ơn nói tiếng Anh.",
            "SortEN1": "_àm __ nó_ _iếng A_h.",
            "SortEN2": "_à_ ơ_ n__ __ế_g Anh_"
        },
        {
            "VN": "Please speak English.",
            "EN": "Làm ơn nói chậm hơn.",
            "SortEN1": "L_m __ _ói chậm _ơn.",
            "SortEN2": "L__ ơ_ nó_ c__m h___"
        },
        {
            "VN": "Please speak more slowly.",
            "EN": "Xin lỗi, tôi nghe không rõ.",
            "SortEN1": "Xin lỗi_ _ôi _ghe k_ô__ rõ.",
            "SortEN2": "_in lỗi t__ ng__ _hông _õ."
        },
        {
            "VN": "Sorry, I didn't hear clearly.",
            "EN": "Chữ đó có nghĩa bạn bè.",
            "SortEN1": "Chữ đó c_ n_hĩ_ bạ_ _è.",
            "SortEN2": "C_ữ đó __ nghĩa _ạ_ __."
        },
        {
            "VN": "That means friend.",
            "EN": "Sai rồi.",
            "SortEN1": "_ai _ồi.",
            "SortEN2": "Sai r___"
        },
        {
            "VN": "That's wrong.",
            "EN": "Gắng nói cái đó.",
            "SortEN1": "Gắng nó_ cá_ đó.",
            "SortEN2": "_ắ_g nó_ cái ___"
        },
        {
            "VN": "Try to say it.",
            "EN": "Cái này có nghĩa gì?",
            "SortEN1": "Cái này _ó __hĩa gì_",
            "SortEN2": "Cá_ n_y _ó nghĩa g__"
        },
        {
            "VN": "What does this mean?",
            "EN": "Cái này nói gì?",
            "SortEN1": "Cá_ này __i g_?",
            "SortEN2": "___ __y n__ gì?"
        },
        {
            "VN": "What does this say?",
            "EN": "Chữ này nghĩa là gì?",
            "SortEN1": "Ch_ này ng_ĩa __ _ì?",
            "SortEN2": "Chữ _à_ _g___ l_ gì?"
        },
        {
            "VN": "What does this word mean?",
            "EN": "Hối suất bao nhiêu?",
            "SortEN1": "_ối _uất ba_ _h__u?",
            "SortEN2": "Hối _uấ_ bao nhiê__"
        },
        {
            "VN": "What's the exchange rate?",
            "EN": "Đó là quyển sách của ai?",
            "SortEN1": "Đ_ l_ qu_ển ___h _ủa ai?",
            "SortEN2": "Đ_ là q____ ___h củ_ a_?"
        },
        {
            "VN": "Whose book is that?",
            "EN": "Tại sao bạn cười?",
            "SortEN1": "_ại sao bạn cười_",
            "SortEN2": "__i ___ b_n cư__?"
        },
        {
            "VN": "Why are you laughing?",
            "EN": "Tại sao bạn không đi?",
            "SortEN1": "Tạ_ sa_ b_n kh_ng đ__",
            "SortEN2": "Tại ___ _ạn __ôn_ _i?"
        },
        {
            "VN": "Why aren't you going?",
            "EN": "Tại sao bạn đã làm điều đó?",
            "SortEN1": "_ạ_ ___ bạn đ_ __m điều đ__",
            "SortEN2": "T_i ___ ___ _ã l_m ___u __?"
        },
        {
            "VN": "Why did you do that?",
            "EN": "Bạn có dị ứng với thứ gì không?",
            "SortEN1": "Bạn có d_ ứng v_i thứ g_ k_ô_g?",
            "SortEN2": "Bạn c_ _ị ứ__ với _h_ g_ khô_g?"
        },
        {
            "VN": "Are you allergic to anything?",
            "EN": "Bạn sẵn sàng chưa?",
            "SortEN1": "Bạn sẵn s_ng c__a_",
            "SortEN2": "__n s_n _à__ _h__?"
        },
        {
            "VN": "Are you ready?",
            "EN": "Gọi điện cho tôi.",
            "SortEN1": "Gọ_ đ_ện c__ tôi.",
            "SortEN2": "G_i _iệ_ cho t_i_"
        },
        {
            "VN": "Call me.",
            "EN": "Bạn đã gửi hoa cho tôi hả?",
            "SortEN1": "B_n đã g_i hoa __o tôi hả?",
            "SortEN2": "_ạ_ __ _ửi ho_ cho t__ __?"
        },
        {
            "VN": "Did you send me flowers?",
            "EN": "Bạn có bán pin không?",
            "SortEN1": "Bạn c_ bán pin kh__g?",
            "SortEN2": "B_n c_ b__ pin _hô_g?"
        },
        {
            "VN": "Do you sell batteries?",
            "EN": "Tôi không cần.",
            "SortEN1": "T_i _hô_g cần.",
            "SortEN2": "__i kh_n_ cần."
        },
        {
            "VN": "I don't care.",
            "EN": "Tôi bỏ cuộc.",
            "SortEN1": "_ôi _ỏ cuộ_.",
            "SortEN2": "Tô_ bỏ c_ộ_."
        },
        {
            "VN": "I give up.",
            "EN": "Tôi gặp tai nạn.",
            "SortEN1": "Tôi gặp _ai n___",
            "SortEN2": "__i _ặp ___ ____"
        },
        {
            "VN": "I got in an accident.",
            "EN": "Tôi bị cảm.",
            "SortEN1": "Tô_ _ị cảm.",
            "SortEN2": "Tôi b_ _ảm."
        },
        {
            "VN": "I have a cold.",
            "EN": "Tôi có một cái trong xe.",
            "SortEN1": "Tô_ __ mộ_ cái trong xe_",
            "SortEN2": "_ôi có ___ ___ tr_n_ x_."
        },
        {
            "VN": "I have one in my car.",
            "EN": "Tôi làm cái bánh này.",
            "SortEN1": "Tô_ _àm c_i bánh này_",
            "SortEN2": "Tôi là_ cái ___h n_y."
        },
        {
            "VN": "I made this cake.",
            "EN": "Tôi còn nhiều thứ phải làm.",
            "SortEN1": "Tôi _ò_ nhi_u _hứ p_ải làm.",
            "SortEN2": "_ô_ __n _h_ều th_ p_ả_ l_m_"
        },
        {
            "VN": "I still have a lot to do.",
            "EN": "Tôi vẫn chưa quyết định.",
            "SortEN1": "Tô_ v__ _hưa quyết _ịn__",
            "SortEN2": "T_i vẫ_ chư_ q_yết đ_nh_"
        },
        {
            "VN": "I still haven't decided.",
            "EN": "Tôi là giáo viên.",
            "SortEN1": "__i l_ _iá_ viên.",
            "SortEN2": "_ôi l_ g__o _i__."
        },
        {
            "VN": "I'm a teacher.",
            "EN": "Tôi tự làm chủ.",
            "SortEN1": "T__ tự làm chủ.",
            "SortEN2": "__i t_ l__ _hủ."
        },
        {
            "VN": "I'm self-employed.",
            "EN": "Tùy vào thời tiết.",
            "SortEN1": "_ù_ _à_ thời tiết.",
            "SortEN2": "Tù_ _à_ _h_i _i_t_"
        },
        {
            "VN": "It depends on the weather.",
            "EN": "Hôm nay trời rất lạnh.",
            "SortEN1": "_ôm n_y tr_i r_t lạnh.",
            "SortEN2": "_ô_ nay tr__ __t l___."
        },
        {
            "VN": "It's very cold today.",
            "EN": "Hành lý của tôi bị thất lạc.",
            "SortEN1": "_ành lý của tôi bị _h_t _ạc.",
            "SortEN2": "___h lý _ủ_ tôi bị _h__ l_c_"
        },
        {
            "VN": "My luggage is missing.",
            "EN": "Tôi đau bụng.",
            "SortEN1": "Tô_ đau b_n_.",
            "SortEN2": "Tô_ đau bụng."
        },
        {
            "VN": "My stomach hurts.",
            "EN": "Tôi đau họng.",
            "SortEN1": "_ôi đa_ ___g.",
            "SortEN2": "Tô_ đau h_ng_"
        },
        {
            "VN": "My throat is sore.",
            "EN": "Đồng hồ tôi đã bị đánh cắp.",
            "SortEN1": "Đ__g _ồ t_i đ_ bị đ_n_ c_p_",
            "SortEN2": "____ hồ t__ đ_ __ __nh cắp."
        },
        {
            "VN": "My watch has been stolen.",
            "EN": "Dùng thuốc này.",
            "SortEN1": "D_ng t_uố_ này.",
            "SortEN2": "_ùng __uốc này_"
        },
        {
            "VN": "Take this medicine.",
            "EN": "Tai nạn xảy ra tại giao lộ.",
            "SortEN1": "Tai nạ_ x_y ra tại _iao l_.",
            "SortEN2": "__i nạ_ _ảy __ __i gi_o l_."
        },
        {
            "VN": "The accident happened at the intersection.",
            "EN": "Đã có một tai nạn xe hơi.",
            "SortEN1": "Đã _ó một tai nạn xe h__.",
            "SortEN2": "_ã _ó mộ_ _ai _ạn x_ _ơi."
        },
        {
            "VN": "There has been a car accident.",
            "EN": "Tôi có thể đổi đô la Mỹ ở đâu?",
            "SortEN1": "Tôi có _hể đổi __ _a Mỹ ở _âu?",
            "SortEN2": "___ _ó __ể đổ_ _ô la Mỹ ở ____"
        },
        {
            "VN": "Where can I exchange U.S. dollars?",
            "EN": "Bạn làm việc ở đâu?",
            "SortEN1": "B_n __m ____ ở đ_u_",
            "SortEN2": "___ là_ ____ ở đ_u?"
        },
        {
            "VN": "Where do you work?",
            "EN": "Bệnh viện gần nhất ở đâu?",
            "SortEN1": "B_nh _i_n g_n nhấ_ _ đâ_?",
            "SortEN2": "B_n_ _iện gầ_ _hất ở đâu_"
        },
        {
            "VN": "Where's the nearest hospital?",
            "EN": "Bưu điện ở đâu?",
            "SortEN1": "Bưu đ___ ở đâu_",
            "SortEN2": "Bư_ điện _ _âu_"
        },
        {
            "VN": "Where's the post office?",
            "EN": "Còn bạn?",
            "SortEN1": "C_n b__?",
            "SortEN2": "__n _ạn_"
        },
        {
            "VN": "And you?",
            "EN": "Còn gì nữa không?",
            "SortEN1": "_òn gì __a _h_ng?",
            "SortEN2": "__n __ nữa _h___?"
        },
        {
            "VN": "Anything else?",
            "EN": "Chúng giống nhau không?",
            "SortEN1": "Chú_g giống n___ __ông?",
            "SortEN2": "C_ú_g g_ốn_ ____ _____?"
        },
        {
            "VN": "Are they the same?",
            "EN": "Bạn sợ không?",
            "SortEN1": "Bạn sợ _hôn_?",
            "SortEN2": "__n _ợ _h_n__"
        },
        {
            "VN": "Are you afraid?",
            "EN": "Bạn sẽ dự đám cưới của họ không?",
            "SortEN1": "Bạn sẽ dự đám cưới c_a họ không?",
            "SortEN2": "Bạ_ sẽ dự ___ cướ_ __a _ọ k___g?"
        },
        {
            "VN": "Are you going to attend their wedding?",
            "EN": "Bạn có gia đình không?",
            "SortEN1": "Bạn có _i_ đìn_ _h_n_?",
            "SortEN2": "___ __ ___ đìn_ _hông_"
        },
        {
            "VN": "Are you married?",
            "EN": "Bạn có khỏe không?",
            "SortEN1": "Bạ_ có _hỏe k_ô_g?",
            "SortEN2": "_ạn _ó _hỏe khô_g?"
        },
        {
            "VN": "Are you okay?",
            "EN": "Bạn ốm hả?",
            "SortEN1": "Bạn __ _ả?",
            "SortEN2": "_ạ_ _m h_?"
        },
        {
            "VN": "Are you sick?",
            "EN": "Sau ngân hàng.",
            "SortEN1": "Sau _g_n hà_g.",
            "SortEN2": "Sau ng__ _à__."
        },
        {
            "VN": "Behind the bank.",
            "EN": "Tôi có thể mượn một ít tiền không?",
            "SortEN1": "T_i có t__ _ượn _ột ít ti_n không_",
            "SortEN2": "_ôi _ó ___ m_ợn __t í_ ti__ k_ông_"
        },
        {
            "VN": "Can I borrow some money?",
            "EN": "Làm ơn đưa phiếu tính tiền.",
            "SortEN1": "_àm ơn đưa _hiếu t__h _i_n.",
            "SortEN2": "L_m _n đ_a __iếu tín_ __ề__"
        },
        {
            "VN": "Can I have the bill please?",
            "EN": "Bạn có thể gọi lại sau được không?",
            "SortEN1": "B_n __ th_ _ọi lạ_ sau được không?",
            "SortEN2": "Bạ_ _ó t_ể _ọ_ __i sa_ đư__ ____g_"
        },
        {
            "VN": "Can you call back later?",
            "EN": "Bạn có thể gọi lại cho tôi sau được không?",
            "SortEN1": "_ạn c_ thể _ọi _ại cho tôi s__ _ược không_",
            "SortEN2": "Bạ_ _ó th_ _ọ_ l_i ch_ __i s_u đ_ợc k_ông?"
        },
        {
            "VN": "Can you call me back later?",
            "EN": "Bạn có thể mang giúp tôi cái này được không?",
            "SortEN1": "Bạ_ có thể ma_g __úp tôi __i này đ_ợ_ không?",
            "SortEN2": "___ __ _hể m_ng _iúp __i _á_ __y ___c khôn_?"
        },
        {
            "VN": "Can you carry this for me?",
            "EN": "Bạn có thể sửa cái này không?",
            "SortEN1": "Bạn _ó thể s__ c_i này không?",
            "SortEN2": "__n __ ___ sử_ ___ này _h___?"
        },
        {
            "VN": "Can you fix this?",
            "EN": "Bạn có thể cho tôi một thí dụ được không?",
            "SortEN1": "Bạn có thể ch_ _ôi _ột th_ dụ đư__ _h_n_?",
            "SortEN2": "Bạn __ t__ __o _ô_ một th_ __ __ợc không?"
        },
        {
            "VN": "Can you give me an example?",
            "EN": "Bạn có thể nói lớn hơn được không?",
            "SortEN1": "__n __ thể n__ _ớ_ hơ_ đượ_ khôn__",
            "SortEN2": "Bạ_ c_ thể _ó_ lớ_ _ơn được __ô_g_"
        },
        {
            "VN": "Can you speak louder please?",
            "EN": "Bạn biết bơi không?",
            "SortEN1": "Bạn biế_ bơi k_ô_g?",
            "SortEN2": "__n b_ết _ơi _h____"
        },
        {
            "VN": "Can you swim?",
            "EN": "Bạn có nhận đô Mỹ không?",
            "SortEN1": "Bạn có _hận đ_ M_ không_",
            "SortEN2": "__n c_ nh_n đô _ỹ _hô_g?"
        },
        {
            "VN": "Do you accept U.S. Dollars?",
            "EN": "Bạn có bạn gái không?",
            "SortEN1": "Bạn c_ bạn g_i _hôn_?",
            "SortEN2": "B_n __ _ạ_ _ái kh____"
        },
        {
            "VN": "Do you have a girlfriend?",
            "EN": "Bạn có vấn đề à?",
            "SortEN1": "Bạn có vấn đ_ à?",
            "SortEN2": "_ạ_ có ___ _ề à_"
        },
        {
            "VN": "Do you have a problem?",
            "EN": "Bạn có hẹn không?",
            "SortEN1": "B_n có h_n _hông?",
            "SortEN2": "__n c_ hẹ_ _hôn__"
        },
        {
            "VN": "Do you have an appointment?",
            "EN": "Bạn có nghe cái đó không?",
            "SortEN1": "Bạn c_ n_he cá_ __ khôn_?",
            "SortEN2": "__n __ _gh_ ___ __ ____g_"
        },
        {
            "VN": "Do you hear that?",
            "EN": "Bạn có biết đường tới khách sạn Marriott không?",
            "SortEN1": "_ạn _ó _iết đư___ tới _hách sạn Marrio_t không?",
            "SortEN2": "__n c_ _i_t ___ng tớ_ k___h _ạn Marr_ot_ khô___"
        },
        {
            "VN": "Do you know how to get to the Marriott Hotel?",
            "EN": "Bạn có biết cái này nghĩa là gì không?",
            "SortEN1": "Bạn c_ __ết c__ này n_hĩa là _ì không?",
            "SortEN2": "B__ có biết cá_ _à_ ng_ĩ_ _à _ì _h_ng?"
        },
        {
            "VN": "Do you know what this means?",
            "EN": "Bạn có biết tôi có thể gọi tắc xi ở đâu không?",
            "SortEN1": "Bạn c_ bi__ tôi có thể gọi tắ_ xi ở đâ_ khô__?",
            "SortEN2": "__n có _i_t t_i _ó thể gọ_ _ắ_ __ ở đâ_ kh_ng_"
        },
        {
            "VN": "Do you know where I can get a taxi?",
            "EN": "Bạn có biết cặp kính của tôi ở đâu không?",
            "SortEN1": "_ạn _ó biết _ặp _ính củ_ t__ ở đâu _hôn_?",
            "SortEN2": "___ c_ __ết __p _ín_ _ủ_ __i _ ___ kh___?"
        },
        {
            "VN": "Do you know where my glasses are?",
            "EN": "Bạn có thích bạn đồng nghiệp của bạn không?",
            "SortEN1": "Bạn có thí__ bạ_ đồn_ ngh_ệp của bạn không?",
            "SortEN2": "___ __ _h_ch bạ_ _ồ__ __hiệ_ c_a ___ k__ng?"
        },
        {
            "VN": "Do you like your co-workers?",
            "EN": "Bạn còn cần gì nữa không?",
            "SortEN1": "B_n c__ cần gì nữa k_ôn_?",
            "SortEN2": "__n _òn c_n __ n__ __ông?"
        },
        {
            "VN": "Do you need anything else?",
            "EN": "Bạn có hiểu không?",
            "SortEN1": "Bạn _ó __ểu khô__?",
            "SortEN2": "Bạ_ __ h___ _h___?"
        },
        {
            "VN": "Do you understand?",
            "EN": "Anh ta có thích trường đó không?",
            "SortEN1": "Anh _a có th_ch t_ườn_ đó _hông?",
            "SortEN2": "A_h _a có t_í__ t_ườ__ _ó k__n__"
        },
        {
            "VN": "Does he like the school?",
            "EN": "Đưa tôi cây viết.",
            "SortEN1": "Đ_a tôi c_y _i_t.",
            "SortEN2": "Đư_ _ô_ cây _i_t_"
        },
        {
            "VN": "Give me the pen.",
            "EN": "Làm sao bạn biết?",
            "SortEN1": "L__ sa_ b__ biế__",
            "SortEN2": "Là_ ___ ___ b___?"
        },
        {
            "VN": "How do you know?",
            "EN": "Cô ta thế nào?",
            "SortEN1": "__ ta t_ế n_o?",
            "SortEN2": "C_ t_ _hế __o?"
        },
        {
            "VN": "How is she?",
            "EN": "Nó dài bao nhiêu?",
            "SortEN1": "N_ dà_ bao nhiêu?",
            "SortEN2": "Nó _à_ ba_ ___êu?"
        },
        {
            "VN": "How long is it?",
            "EN": "Bao nhiêu?",
            "SortEN1": "Bao nhiêu_",
            "SortEN2": "__o nhi__?"
        },
        {
            "VN": "How many?",
            "EN": "Nó giá bao nhiêu?",
            "SortEN1": "N_ g_á bao nhi_u_",
            "SortEN2": "__ __á _a_ nh_êu_"
        },
        {
            "VN": "How much is it?",
            "EN": "Tôi có nhiều việc phải làm.",
            "SortEN1": "Tô_ có n_iề_ _i_c phải _àm.",
            "SortEN2": "Tôi c_ n_iều việc _h_i _à__"
        },
        {
            "VN": "I have a lot of things to do.",
            "EN": "Trong vòng 30 phút.",
            "SortEN1": "Trong v_ng 30 phút_",
            "SortEN2": "_ron_ vòn_ 3_ _____"
        },
        {
            "VN": "In 30 minutes.",
            "EN": "Còn ai khác tới không?",
            "SortEN1": "C__ ai khác _ới khôn_?",
            "SortEN2": "C__ ai _há_ t__ ______"
        },
        {
            "VN": "Is anyone else coming?",
            "EN": "Mọi việc ổn không?",
            "SortEN1": "_ọi việc ổ_ không?",
            "SortEN2": "Mọi v__c ổ_ k__n_?"
        },
        {
            "VN": "Is everything ok?",
            "EN": "Bên ngoài trời lạnh không?",
            "SortEN1": "Bên ngoà_ trời lạ__ k__ng?",
            "SortEN2": "Bên ng_ài _rời __n_ _hông_"
        },
        {
            "VN": "Is it cold outside?",
            "EN": "Nó cách xa đây không?",
            "SortEN1": "_ó c_ch xa __y __ông_",
            "SortEN2": "Nó __ch x_ đâ_ kh_ng?"
        },
        {
            "VN": "Is it far from here?",
            "EN": "Nó nóng không?",
            "SortEN1": "Nó nóng k__n_?",
            "SortEN2": "__ _ón_ khô__?"
        },
        {
            "VN": "Is it hot?",
            "EN": "Trời đang mưa không?",
            "SortEN1": "T__i đ_ng _ưa không?",
            "SortEN2": "Tr_i đ_n_ _ư_ __ôn_?"
        },
        {
            "VN": "Is it raining?",
            "EN": "Có thứ gì rẻ hơn không?",
            "SortEN1": "C_ t_ứ gì rẻ _ơn không?",
            "SortEN2": "C_ _h_ gì _ẻ hơ_ k___g?"
        },
        {
            "VN": "Is there anything cheaper?",
            "EN": "Con trai bạn có đây không?",
            "SortEN1": "___ t__i b__ có đây kh__g?",
            "SortEN2": "___ __a_ bạn _ó đ__ kh___?"
        },
        {
            "VN": "Is your son here?",
            "EN": "Tôi nên đợi không?",
            "SortEN1": "T_i nên đợi không?",
            "SortEN2": "_ôi _ên _ợ_ _hô_g_"
        },
        {
            "VN": "Should I wait?",
            "EN": "Cái lớn hay cái nhỏ?",
            "SortEN1": "Cái _ớ_ __y c__ n_ỏ?",
            "SortEN2": "C_i __n ha_ __i nh_?"
        },
        {
            "VN": "The big one or the small one?",
            "EN": "Những chiếc xe là xe Mỹ.",
            "SortEN1": "Nhữ_g chiếc x_ l_ x_ _ỹ.",
            "SortEN2": "Những _h_ếc x_ __ __ __."
        },
        {
            "VN": "The cars are American.",
            "EN": "Đã có vấn đề gì không?",
            "SortEN1": "Đ_ c_ _ấn đ_ gì khôn__",
            "SortEN2": "Đ_ __ vấn __ __ __ô___"
        },
        {
            "VN": "Were there any problems?",
            "EN": "Bạn có ở thư viện tối qua không?",
            "SortEN1": "B_n _ó ở t_ư _i_n t__ q_a _hông?",
            "SortEN2": "B_n c_ _ thư vi_n ___ qua khô___"
        },
        {
            "VN": "Were you at the library last night?",
            "EN": "Bạn đang làm gì?",
            "SortEN1": "B_n đ_ng l_m gì?",
            "SortEN2": "_ạ_ đa_g ___ __?"
        },
        {
            "VN": "What are you doing?",
            "EN": "Bạn đang nghĩ gì?",
            "SortEN1": "Bạn đang ngh_ _ì?",
            "SortEN2": "_ạ_ __n_ n__ĩ _ì?"
        },
        {
            "VN": "What are you thinking about?",
            "EN": "Hai bạn đang nói chuyện gì?",
            "SortEN1": "H__ bạn _an_ nói chuy__ gì?",
            "SortEN2": "_ai ___ _an_ ___ ch_yệ_ __?"
        },
        {
            "VN": "What are you two talking about?",
            "EN": "Tối qua bạn làm gì?",
            "SortEN1": "Tối qua bạn làm gì?",
            "SortEN2": "___ ___ _ạ_ làm g__"
        },
        {
            "VN": "What did you do last night?",
            "EN": "Hôm qua bạn làm gì?",
            "SortEN1": "_ôm qua b__ làm g_?",
            "SortEN2": "___ ___ _ạn _à_ _ì?"
        },
        {
            "VN": "What did you do yesterday?",
            "EN": "Bạn đã nghĩ gì?",
            "SortEN1": "B_n đã n_hĩ g_?",
            "SortEN2": "Bạn đ_ _ghĩ gì_"
        },
        {
            "VN": "What did you think?",
            "EN": "Họ học gì?",
            "SortEN1": "H_ h_c g_?",
            "SortEN2": "_ọ h_c gì?"
        },
        {
            "VN": "What do they study?",
            "EN": "Bạn có gì?",
            "SortEN1": "_ạ_ có g__",
            "SortEN2": "B__ _ó g_?"
        },
        {
            "VN": "What do you have?",
            "EN": "Bạn nghĩ gì?",
            "SortEN1": "Bạ_ nghĩ ___",
            "SortEN2": "_ạn ng__ ___"
        },
        {
            "VN": "What do you think?",
            "EN": "Điều gì đã xảy ra?",
            "SortEN1": "_iề_ __ đã _ảy ra?",
            "SortEN2": "____ gì đ_ _ảy _a_"
        },
        {
            "VN": "What happened?",
            "EN": "Nó là cái gì?",
            "SortEN1": "N_ là c__ _ì_",
            "SortEN2": "_ó là _á_ __?"
        },
        {
            "VN": "What is it?",
            "EN": "Đó là cái gì?",
            "SortEN1": "Đó là cái gì_",
            "SortEN2": "__ _à ___ g__"
        },
        {
            "VN": "What is that?",
            "EN": "Tôi nên mặc gì?",
            "SortEN1": "_ô_ nê_ _ặc __?",
            "SortEN2": "Tô_ n__ ___ gì?"
        },
        {
            "VN": "What should I wear?",
            "EN": "Có gì trong nó?",
            "SortEN1": "__ gì t_o_g nó?",
            "SortEN2": "__ _ì trong _ó?"
        },
        {
            "VN": "What's in it?",
            "EN": "Nhiệt độ bao nhiêu?",
            "SortEN1": "_hiệt độ ba_ nh_êu?",
            "SortEN2": "___ệ_ đ_ ___ n_i_u?"
        },
        {
            "VN": "What's the temperature?",
            "EN": "Cái gì đây?",
            "SortEN1": "Cái gì đây?",
            "SortEN2": "Cái g_ __y?"
        },
        {
            "VN": "What's this?",
            "EN": "Có chuyện gì vậy?",
            "SortEN1": "Có ch_yện g_ vậy?",
            "SortEN2": "C_ _____n __ _ậy?"
        },
        {
            "VN": "What's up?",
            "EN": "Bạn từ đâu tới?",
            "SortEN1": "B_n từ đâ_ tới?",
            "SortEN2": "__n _ừ đâ_ t__?"
        },
        {
            "VN": "Where are you from?",
            "EN": "Tôi có thể thuê xe hơi ở đâu?",
            "SortEN1": "T__ c_ _h_ _huê __ _ơi ở đâu?",
            "SortEN2": "Tôi c_ ___ thu_ _e h_i ở đ_u?"
        },
        {
            "VN": "Where can I rent a car?",
            "EN": "Nó đã xảy ra ở đâu?",
            "SortEN1": "Nó đã x_y ra ở đâu_",
            "SortEN2": "__ __ _ảy r_ _ đ__?"
        },
        {
            "VN": "Where did it happen?",
            "EN": "Bạn đã học nó ở đâu?",
            "SortEN1": "Bạn đã _ọc n_ ở đâu?",
            "SortEN2": "B_n __ _ọc nó ở __u_"
        },
        {
            "VN": "Where did you learn it?",
            "EN": "Anh ta từ đâu tới?",
            "SortEN1": "Anh ta từ __u t_i?",
            "SortEN2": "___ ta _ừ đ_u t_i?"
        },
        {
            "VN": "Where is he from?",
            "EN": "Anh ta ở đâu?",
            "SortEN1": "_nh ta ở ____",
            "SortEN2": "_n_ __ _ __u?"
        },
        {
            "VN": "Where is he?",
            "EN": "Món nào ngon hơn, mì Ý hay rau gà?",
            "SortEN1": "Món nà_ ngo_ hơn mì Ý _a_ _au _à?",
            "SortEN2": "_ó_ _ào ngo_ __n m_ _ ___ ___ g__"
        },
        {
            "VN": "Which is better, the spaghetti or chicken salad?",
            "EN": "Bạn muốn cái nào?",
            "SortEN1": "B_n muốn cái nào?",
            "SortEN2": "_ạn m_ố_ cá_ nà__"
        },
        {
            "VN": "Which one do you want?",
            "EN": "Cái nào rẻ hơn?",
            "SortEN1": "__i nào r_ hơn?",
            "SortEN2": "__i nà_ __ h__?"
        },
        {
            "VN": "Which one is cheaper?",
            "EN": "Cái nào tốt nhất?",
            "SortEN1": "Cái n_o tố_ _hất?",
            "SortEN2": "_á_ nào _ốt __ấ_?"
        },
        {
            "VN": "Which one is the best?",
            "EN": "Anh ta học trường nào?",
            "SortEN1": "Anh t_ học trường nào?",
            "SortEN2": "_n_ ta ___ t____g nà_?"
        },
        {
            "VN": "Which school does he go to?",
            "EN": "Họ là ai?",
            "SortEN1": "Họ là ai?",
            "SortEN2": "Họ _à a__"
        },
        {
            "VN": "Who are they?",
            "EN": "Bạn đang tìm ai?",
            "SortEN1": "Bạn đ_ng tìm ai?",
            "SortEN2": "_ạ_ ____ t_m ai_"
        },
        {
            "VN": "Who are you looking for?",
            "EN": "Ai đây? (hỏi ai đang gọi điện thoại)",
            "SortEN1": "Ai _ây_ (h_i ai _ang gọi _iện _h_ại_",
            "SortEN2": "A_ đâ_? (h__ __ đ___ gọi đi_n _h__i_"
        },
        {
            "VN": "Who is it?",
            "EN": "Ai dạy bạn cái đó?",
            "SortEN1": "A_ dạ_ _ạn __i đó?",
            "SortEN2": "Ai d_y __n c_i __?"
        },
        {
            "VN": "Who taught you that?",
            "EN": "Ai đang gọi?",
            "SortEN1": "_i đang gọi_",
            "SortEN2": "Ai đ___ __i?"
        },
        {
            "VN": "Who's calling?",
            "EN": "Người đàn ông đằng kia là ai?",
            "SortEN1": "_gườ_ đàn ôn_ đằ_g ki_ là _i?",
            "SortEN2": "__ư_i đ__ ông _ằng k_a _à _i_"
        },
        {
            "VN": "Who's that man over there?",
            "EN": "Tại sao bạn đã nói điều đó?",
            "SortEN1": "Tại sao bạn đ_ nói điề_ đó?",
            "SortEN2": "T_i sa_ __n _ã ___ __ều __?"
        },
        {
            "VN": "Why did you say that?",
            "EN": "Làm ơn đưa giùm tôi lọ muối.",
            "SortEN1": "_àm _n _ư_ g__m tôi _ọ _u_i.",
            "SortEN2": "_à_ ơ_ đư_ gi_m t_i _ọ _u___"
        },
        {
            "VN": "Will you pass me the salt please?",
            "EN": "Làm ơn đặt cái này vào trong xe giúp tôi.",
            "SortEN1": "L__ _n _ặt __i n_y và_ tro_g x_ giú_ tô_.",
            "SortEN2": "_à_ __ _ặ_ __i này v_o _rong __ giúp __i."
        },
        {
            "VN": "Will you put this in the car for me?",
            "EN": "Làm ơn nói với anh ta gọi lại cho tôi.",
            "SortEN1": "Làm ơn __i ___ a_h ta gọ_ l_i c_o t_i.",
            "SortEN2": "L_m _n _ói __i ___ ta __i _ại ch_ tôi_"
        },
        {
            "VN": "Would you ask him to call me back please?",
            "EN": "Vâng.",
            "SortEN1": "Vâ_g.",
            "SortEN2": "__ng."
        },
        {
            "VN": "Yes.",
            "EN": "Bạn có một chiếc xe rất đẹp.",
            "SortEN1": "_ạ_ có mộ_ chiếc xe _ất đẹp.",
            "SortEN2": "__n __ __t ___ếc xe _ất _ẹp."
        },
        {
            "VN": "You have a very nice car.",
            "EN": "Bạn trông giống em gái (chị) của tôi.",
            "SortEN1": "Bạn trôn_ gi__g e_ gái (chị) của tôi_",
            "SortEN2": "__n __ô__ g_ốn_ e_ gá_ (__ị) __a tô__"
        },
        {
            "VN": "You look like my sister.",
            "EN": "6 đô 1 giờ.",
            "SortEN1": "6 _ô _ g_ờ.",
            "SortEN2": "6 đ_ _ _i_."
        },
        {
            "VN": "6 dollars per hour.",
            "EN": "Bạn đang chờ ai đó hả?",
            "SortEN1": "Bạn đ__g c__ ai đó _ả?",
            "SortEN2": "B_n đang __ờ a_ __ ___"
        },
        {
            "VN": "Are you waiting for someone?",
            "EN": "Hôm nay bạn có làm việc không?",
            "SortEN1": "H_m n__ b_n c_ làm việc kh___?",
            "SortEN2": "__m ___ _ạ_ _ó _à_ __ệc _h__g?"
        },
        {
            "VN": "Are you working today?",
            "EN": "Làm ơn đưa giùm cái áo sơ mi của tôi.",
            "SortEN1": "Làm ơn đưa giù_ cái __ _ơ __ _ủa t___",
            "SortEN2": "___ ơn đưa giù_ c_i __ sơ _i c__ tô__"
        },
        {
            "VN": "Bring me my shirt please.",
            "EN": "Bạn có thích xem tivi không?",
            "SortEN1": "_ạn c_ thích _em tiv_ không?",
            "SortEN2": "B__ _ó _hí_h x_m __v_ khôn_?"
        },
        {
            "VN": "Do you like to watch TV?",
            "EN": "Bạn có thích sếp của bạn không?",
            "SortEN1": "__n có __ích sếp _ủa bạn không_",
            "SortEN2": "B_n c_ th___ _ế_ c__ bạn _h__g?"
        },
        {
            "VN": "Do you like your boss?",
            "EN": "Bạn đã học xong chưa?",
            "SortEN1": "_ạn đã học xong ch_a?",
            "SortEN2": "Bạn đã ___ xon_ _hưa_"
        },
        {
            "VN": "Have you finished studying?",
            "EN": "Anh ta làm việc tại một công ty máy tính ở ",
            "SortEN1": "A_h ta là_ việ_ tạ_ m_t c_ng t_ __y tính ở ",
            "SortEN2": "__h __ l_m vi_c ___ __t _ô_g t_ má_ tí_h _ "
        },
        {
            "VN": "New York.",
            "EN": "He works at a computer company in New York.",
            "SortEN1": "H_ _orks _t _ c_m_uter ___pany in Ne_ _o___",
            "SortEN2": "H_ work_ _t a __mput__ _o_pa_y in New _or_."
        },
        {
            "VN": "Anh ta là kỹ sư.",
            "EN": "He's an Engineer.",
            "SortEN1": "He's an E_gi_eer.",
            "SortEN2": "He'_ __ En_i_eer_"
        },
        {
            "VN": "Anh ta rất chăm chỉ.",
            "EN": "He's very hard working.",
            "SortEN1": "H_'_ very h_rd _o_kin_.",
            "SortEN2": "_e'_ _e__ h_r_ w_rki_g."
        },
        {
            "VN": "Bạn đã làm việc ở đây bao lâu?",
            "EN": "How long have you worked here?",
            "SortEN1": "How long hav_ y_u wo_k_d here?",
            "SortEN2": "__w long hav_ __u _or__d _e__?"
        },
        {
            "VN": "Bạn làm việc mấy giờ một tuần?",
            "EN": "How many hours a week do you work?",
            "SortEN1": "Ho_ many hours _ week do y_u work?",
            "SortEN2": "Ho_ ___y ho_rs a w___ __ _o_ _ork?"
        },
        {
            "VN": "Bạn có bao nhiêu tiền?",
            "EN": "How much money do you have?",
            "SortEN1": "How much mon_y _o you __ve?",
            "SortEN2": "How mu__ m_n__ __ yo_ ha__?"
        },
        {
            "VN": "Chuyến đi thế nào?",
            "EN": "How was the trip?",
            "SortEN1": "H__ was t_e trip_",
            "SortEN2": "H__ _a_ th_ __ip?"
        },
        {
            "VN": "Thời tiết thế nào?",
            "EN": "How's the weather?",
            "SortEN1": "How_s the w_athe_?",
            "SortEN2": "Ho_'s the _e_t___?"
        },
        {
            "VN": "Tôi quên.",
            "EN": "I forget.",
            "SortEN1": "_ for_et.",
            "SortEN2": "_ _o_____"
        },
        {
            "VN": "Tôi còn nhiều thứ phải mua.",
            "EN": "I still have a lot of things to buy.",
            "SortEN1": "I sti_l ha_e a l__ o_ t_ings to b_y_",
            "SortEN2": "I ____l _av_ _ ___ __ t_i_gs to _u__"
        },
        {
            "VN": "Tôi khỏe.",
            "EN": "I'm good.",
            "SortEN1": "_'m goo_.",
            "SortEN2": "I'_ __od."
        },
        {
            "VN": "Tôi sẵn sàng.",
            "EN": "I'm ready.",
            "SortEN1": "I'm ready.",
            "SortEN2": "I_m r___y_"
        },
        {
            "VN": "Tôi đã thấy nó.",
            "EN": "I've seen it.",
            "SortEN1": "_'ve see_ it_",
            "SortEN2": "I_ve se_n i__"
        },
        {
            "VN": "Bạn làm nghề gì?",
            "EN": "What do you do for work?",
            "SortEN1": "_h_t do _ou _o for _o_k_",
            "SortEN2": "_ha_ do _o_ d_ _or _o__?"
        },
        {
            "VN": "Bố mẹ bạn làm nghề gì?",
            "EN": "What do your parents do for work?",
            "SortEN1": "What d_ your parents _o for __rk?",
            "SortEN2": "Wh_t do y___ _a_e_ts _o f__ _____"
        },
        {
            "VN": "Anh ta làm nghề gì?",
            "EN": "What does he do for work?",
            "SortEN1": "Wh_t doe_ he do for work?",
            "SortEN2": "___t _o_s __ __ ___ _o___"
        },
        {
            "VN": "Bố bạn làm nghề gì?",
            "EN": "What does your father do for work?",
            "SortEN1": "Wh__ does y__r f_ther __ fo_ w___?",
            "SortEN2": "Wha_ do_s y_ur _ath_r d_ f__ wo_k_"
        },
        {
            "VN": "Mỗi ngày bạn đi làm lúc mấy giờ?",
            "EN": "What time do you go to work everyday?",
            "SortEN1": "What t_me do you g_ to wo__ e__ryda_?",
            "SortEN2": "W___ t_m_ d_ ___ g_ _o w___ _ver_d___"
        },
        {
            "VN": "Có chuyện gì vậy?",
            "EN": "What's the matter?",
            "SortEN1": "_hat_s __e mat_e__",
            "SortEN2": "Wh__'_ t__ m_t_er?"
        },
        {
            "VN": "Khi nào bạn tới Mỹ?",
            "EN": "When do you arrive in the U.S.?",
            "SortEN1": "When _o yo_ ar_ive _n the U.S._",
            "SortEN2": "When do yo_ ______ _n _he U_S._"
        },
        {
            "VN": "Khi nào bạn xong việc?",
            "EN": "When do you get off work?",
            "SortEN1": "When _o you g_t off work?",
            "SortEN2": "W___ do yo_ get o__ w___?"
        },
        {
            "VN": "Bạn đã đặt nó ở đâu?",
            "EN": "Where did you put it?",
            "SortEN1": "Wher_ d_d yo_ _ut it_",
            "SortEN2": "_he__ d__ yo_ pu_ i_?"
        },
        {
            "VN": "Bạn muốn đi đâu?",
            "EN": "Where do you want to go?",
            "SortEN1": "Wh__e do yo_ wan_ to __?",
            "SortEN2": "_he__ d_ y__ ___t _o go_"
        },
        {
            "VN": "Đau ở đâu?",
            "EN": "Where does it hurt?",
            "SortEN1": "Wh__e d_e_ __ hurt?",
            "SortEN2": "_her_ d___ __ hurt_"
        },
        {
            "VN": "Tới đây.",
            "EN": "Come here.",
            "SortEN1": "_ome here_",
            "SortEN2": "C_m_ _e_e_"
        },
        {
            "VN": "Bạn có nghĩ ngày mai trời sẽ mưa không?",
            "EN": "Do you think it'll rain today?",
            "SortEN1": "Do y__ thin_ _t_ll __in _od_y_",
            "SortEN2": "Do _o_ _hi__ _____ _a__ t_d__?"
        },
        {
            "VN": "Bạn có nghĩ ngày mai trời sẽ mưa không?",
            "EN": "Do you think it's going to rain tomorrow?",
            "SortEN1": "Do you th_n_ it_s going t_ r_in tomorrow?",
            "SortEN2": "Do __u ____k ____ g_i__ _o r_i_ _om_r_o__"
        },
        {
            "VN": "Trời có thường mưa tuyết vào mùa đông ở ",
            "EN": "Massachusetts không?",
            "SortEN1": "Mass_chusett_ k_ông_",
            "SortEN2": "M__sa_h__etts _h___?"
        },
        {
            "VN": "Does it often snow in the winter in",
            "EN": "Massachusetts?",
            "SortEN1": "Ma_s_chuset_s?",
            "SortEN2": "M___achu_etts?"
        },
        {
            "VN": "Việc làm ăn thế nào?",
            "EN": "How's business?",
            "SortEN1": "How's business_",
            "SortEN2": "How's b_si_e_s?"
        },
        {
            "VN": "Nó gần không?",
            "EN": "Is it close?",
            "SortEN1": "Is __ close?",
            "SortEN2": "I_ i_ c_o___"
        },
        {
            "VN": "Điều đó có thể không?",
            "EN": "Is it possible?",
            "SortEN1": "Is it p_s_ibl_?",
            "SortEN2": "_s i_ _o_si_l_?"
        },
        {
            "VN": "Nó sẵn sàng không?",
            "EN": "Is it ready?",
            "SortEN1": "Is it rea_y_",
            "SortEN2": "I_ i_ _ea_y?"
        },
        {
            "VN": "Giá 20 đô một giờ.",
            "EN": "It costs 20 dollars per hour.",
            "SortEN1": "It costs __ d__lars ___ h_ur_",
            "SortEN2": "__ co_t_ 20 do_lar_ _e_ __ur_"
        },
        {
            "VN": "Đau ở đây.",
            "EN": "It hurts here.",
            "SortEN1": "I_ __r_s here_",
            "SortEN2": "It ___ts _er_."
        },
        {
            "VN": "Nó sẽ sớm tới.",
            "EN": "It will arrive shortly.",
            "SortEN1": "It _il_ arrive shortly_",
            "SortEN2": "_t w___ arr__e s__r__y."
        },
        {
            "VN": "Nó cách xa đây.",
            "EN": "It's far from here.",
            "SortEN1": "It__ far from he_e_",
            "SortEN2": "It__ fa_ _rom h_re_"
        },
        {
            "VN": "Hôm nay trời sẽ nóng.",
            "EN": "It's going to be hot today.",
            "SortEN1": "It__ g_i_g t_ be _ot to_ay.",
            "SortEN2": "It's go_ng t_ b_ ___ to___."
        },
        {
            "VN": "Nó ở phía bắc nơi này.",
            "EN": "It's north of here.",
            "SortEN1": "_t's north of her_.",
            "SortEN2": "__'s n__th __ here."
        },
        {
            "VN": "Nó ở đằng kia.",
            "EN": "It's over there.",
            "SortEN1": "It's ___r ther_.",
            "SortEN2": "It'_ ov_r ___re."
        },
        {
            "VN": "Trời đang mưa.",
            "EN": "It's raining.",
            "SortEN1": "It's ra_n_ng.",
            "SortEN2": "It's r___i_g_"
        },
        {
            "VN": "Muộn quá rồi.",
            "EN": "It's too late.",
            "SortEN1": "It's _o_ late.",
            "SortEN2": "____ __o __te_"
        },
        {
            "VN": "Nó rất quan trọng.",
            "EN": "It's very important.",
            "SortEN1": "It_s ver_ im__r__nt.",
            "SortEN2": "_t_s _er_ __porta___"
        },
        {
            "VN": "Đường trơn.",
            "EN": "The roads are slippery.",
            "SortEN1": "_he ro_d_ __e sl_ppery.",
            "SortEN2": "T_e __ad_ ___ _lipper_."
        },
        {
            "VN": "Ngày mai thời tiết thế nào?",
            "EN": "What will the weather be like tomorrow?",
            "SortEN1": "What _ill t_e _ea___r be like tomorr__?",
            "SortEN2": "Wha_ _i_l th_ ______r __ l___ ____rr___"
        },
        {
            "VN": "Giá phòng bao nhiêu?",
            "EN": "What's the room rate?",
            "SortEN1": "__at's _he ro_m r_t_?",
            "SortEN2": "Wh_t'_ _he r___ _____"
        }
    ]
    return arr
}

export default Sentences1000