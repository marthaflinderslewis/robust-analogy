var all_problems = {
  "alph_0": {
    "shuffled_letters": [
      "n",
      "b",
      "q",
      "u",
      "o"
    ],
    "shuffled_alphabet": [
      "a",
      "n",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "b",
      "q",
      "p",
      "u",
      "r",
      "s",
      "t",
      "o",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "larger_int": [
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[d f h j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j i l m b] &nbsp [j k l m b]<br>[z d f h j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n e d c] &nbsp [a n c d e]<br>[c e i g k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v x w y z] &nbsp [v w x y z]<br>[m k i q u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t o v] &nbsp [s t o w]<br>[e g i k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b l m k q] &nbsp [k l m b q]<br>[b r p t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m b q p] &nbsp [m b q u]<br>[i k m q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[q u s o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x y] &nbsp [o w x y]<br>[u s o w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b q p u] &nbsp [b q p u r]<br>[u s o w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[m b q p u u] &nbsp [m b q p u]<br>[r s t o v v w x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[j k l m b q p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n n c d e] &nbsp [a n c d e]<br>[g h i j k l m b q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p u r s s t] &nbsp [p u r s t]<br>[m m b q p u r s t o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t o o v] &nbsp [r s t o v]<br>[b q p u r r s t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[g h i j k l m b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[n c d e f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[q p u r s t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o v w x] &nbsp [o v w x y]<br>[r s t o v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[b q p u r s t o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[o o v v w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m b]<br>[u u r r s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[n n c c d d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[k k l l m m b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b q p u z] &nbsp [b q p u r]<br>[m m b b q q j j u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k j l m b] &nbsp [j k l m b]<br>[m m l l b b q q p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[b b q q p p u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n c c d e f] &nbsp [n c d e f]<br>[m m b b b b q q p p u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m b q] &nbsp [l m b p]<br>[u u r r s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n c d e] &nbsp [a c d e]<br>[s s t t o o v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[o v l x y] &nbsp [o v w x y]<br>[p x u x w x s x t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b n p u r] &nbsp [b q p u r]<br>[n x c x r x e x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e z g h i] &nbsp [e f g h i]<br>[u x r x n x t x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u r s t o o] &nbsp [u r s t o]<br>[k x l x m x b x q x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m b q p] &nbsp [m b q p u]<br>[d x e x f x g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a n c d] &nbsp [a n c d e]<br>[r x s x t x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v t o s w] &nbsp [s t o v w]<br>[q x p x s x r x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w t o v s] &nbsp [s t o v w]<br>[d x n x c x a x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q p p u r s] &nbsp [q p u r s]<br>[r x s x t x t x o x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[a x n x c x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[19 20 21 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a n n c d e] &nbsp [a n c d e]<br>[20 21 22 22 23 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b q p u] &nbsp [b q p u r]<br>[3 4 5 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e e f g h] &nbsp [d e f g h]<br>[13 14 14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f f g h i] &nbsp [e f g h i]<br>[17 18 18 19 20 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x n c d e] &nbsp [a n c d e]<br>[13 10 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l m b q] &nbsp [l m b p]<br>[22 23 24 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t h v w] &nbsp [s t o v w]<br>[1 2 3 25 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o v w x] &nbsp [t v w x]<br>[15 16 17 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u p q r s] &nbsp [q p u r s]<br>[14 11 12 13 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[o v w x y y] &nbsp [o v w x y]<br>[e d c n n a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k l m m] &nbsp [i j k l m]<br>[o t s r r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k l m m b q] &nbsp [k l m b q]<br>[j i h g g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l m] &nbsp [j k l b]<br>[z y x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t o] &nbsp [r s t v]<br>[o t s r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l m b] &nbsp [k l m q]<br>[y x w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[u p q b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r r s t o v] &nbsp [r s t o v]<br>[e e d c n a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[e d c n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l m b b q] &nbsp [k l m b q]<br>[x x w v o t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[l m b p q] &nbsp [l m b q p]<br>[f f d d h h j j l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o v w x] &nbsp [o v w y]<br>[b x m x l x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b q p u] &nbsp [b q p r]<br>[r r s s t t o o v v w w x x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l m x q] &nbsp [k l m b q]<br>[12 11 10 9 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l m] &nbsp [j k l b]<br>[o t s r u p q b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b q p u] &nbsp [b q p u r]<br>[f f e e d d c c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a c n d e] &nbsp [a n c d e]<br>[16 17 22 19 20 21 18 23 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v v w x y z] &nbsp [v w x y z]<br>[17 16 16 15 14 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[q x p x u x r x s x t x o x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r s v o t] &nbsp [r s t o v]<br>[l x m x b x p x q x u x r x s x t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[k l f b q] &nbsp [k l m b q]<br>[q x u x s x o x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p u r i t] &nbsp [p u r s t]<br>[6 5 17 3 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k l m b] &nbsp [k l m b q]<br>[17 17 18 18 19 19 20 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l m] &nbsp [j k l b]<br>[r x t x v x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m u q p b] &nbsp [m b q p u]<br>[15 17 21 19 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a n c d z] &nbsp [a n c d e]<br>[5 6 7 8 9 10 11 18 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[r r s s t t o o v v w w x x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[b x m x l x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l m b s] &nbsp [k l m b q]<br>[z z f f g g h h i i j j k k l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l m b] &nbsp [k l m q]<br>[20 20 21 21 22 22 23 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[q p u r] &nbsp [q p u r s]<br>[j x k x l x m x b x q x p x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[u u s s o o w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g i h j k] &nbsp [g h i j k]<br>[17 0 18 0 20 0 19 0 21 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[7 7 8 8 9 9 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n c f e d] &nbsp [n c d e f]<br>[9 9 10 10 12 12 11 11 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q b p u r] &nbsp [b q p u r]<br>[d x e x c x n x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a n c e d] &nbsp [a n c d e]<br>[z x y x w x x x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r s t o] &nbsp [r s t v]<br>[n n d d f f h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n c d e] &nbsp [a c d e]<br>[k k m m q q u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[j l b p r t v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[q p u r] &nbsp [q p u s]<br>[b b x x q q x x p p x x u u x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p u r s] &nbsp [q u r s]<br>[10 11 12 13 14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[o t s r u p q b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o v w x] &nbsp [t v w x]<br>[8 9 10 11 12 13 14 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[15 14 13 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n c d e] &nbsp [n c d f]<br>[k k x x l l x x m m x x b b x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t o w v x] &nbsp [t o v w x]<br>[u u x x b b x x q q x x p p x x m m x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r p u q s] &nbsp [q p u r s]<br>[o x q x u x s x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n o v w x] &nbsp [t o v w x]<br>[y y x x w w v v s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a c n d e] &nbsp [a n c d e]<br>[r r x x s s x x t t x x v v x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[b q p g r] &nbsp [b q p u r]<br>[w w v v o o k k s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d e f g g h] &nbsp [d e f g h]<br>[i h g f e d d c n a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[24 23 22 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t t o v] &nbsp [r s t o v]<br>[2 2 4 6 8 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t o] &nbsp [r s t o v]<br>[16 17 18 19 20 21 22 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t v o w x] &nbsp [t o v w x]<br>[j l b p r x v t z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t o v w] &nbsp [s o v w]<br>[h x i x j x k x l x m x b x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d c n e f] &nbsp [n c d e f]<br>[15 12 13 14 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m b j p] &nbsp [l m b q p]<br>[r r u u p p q q e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o v w x] &nbsp [o v w y]<br>[17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[t u r s p] &nbsp [p u r s t]<br>[14 10 12 8 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[u u s s o o w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m b q] &nbsp [l m b p]<br>[8 9 10 11 12 13 14 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k b m l q] &nbsp [k l m b q]<br>[f h j l t p r b v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [o w x y]<br>[2 2 3 3 4 4 5 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q h u r s] &nbsp [q p u r s]<br>[b b q q p p u u c c s s t t o o v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m b e] &nbsp [k l m b q]<br>[u x r x s x t x o x v x k x x x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t x v w o] &nbsp [t o v w x]<br>[15 15 14 14 13 13 16 16 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[s s x x t t x x o o x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r s t o] &nbsp [r s t o v]<br>[w o s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[n c d e] &nbsp [n c d f]<br>[7 9 11 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m b q p] &nbsp [m b q u]<br>[16 0 17 0 18 0 19 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[f f x x g g x x h h x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n c d l f] &nbsp [n c d e f]<br>[i i u u p p q q b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p u r s] &nbsp [q u r s]<br>[h h i i j j k k l l m m b b q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j k k] &nbsp [g h i j k]<br>[1 2 3 4 4 5 6 7 8 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [o w x y]<br>[i i k k m m q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u r s p] &nbsp [p u r s t]<br>[k k l l s s b b q q p p u u r r m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p u r r s t] &nbsp [p u r s t]<br>[17 19 19 21 23 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o v w x] &nbsp [o v w y]<br>[f x g x h x i x j x k x l x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[n c d e] &nbsp [n c d f]<br>[18 0 17 0 16 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[d d x x c c x x n n x x a a x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p u r] &nbsp [b p u r]<br>[s s u u q q m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m f q p u] &nbsp [m b q p u]<br>[y y x x x x x x w w x x g g x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t o v] &nbsp [s t o w]<br>[i x k x m x q x u x s x o x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b q p u] &nbsp [b q p r]<br>[k k j j i i h h g g f f e e d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n c d e] &nbsp [a c d e]<br>[10 10 9 9 8 8 7 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t o v] &nbsp [s t o w]<br>[v t r p b l j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[9 9 10 10 11 11 12 12 13 13 14 14 15 15 16 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n c d] &nbsp [a n c d e]<br>[12 12 14 14 16 16 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[a n c d] &nbsp [a n c d e]<br>[k k x x l l x x m m x x b b x x q q x x p p x x u u x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b q p u m] &nbsp [b q p u r]<br>[u u x x p p x x q q x x b b x x y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m b q] &nbsp [l m b q p]<br>[14 14 0 0 15 15 0 0 16 16 0 0 17 17 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m b q p] &nbsp [m b q u]<br>[13 12 11 10 9 8 7 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n c d e] &nbsp [n c d e f]<br>[p p x x r r x x t t x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u p q r s] &nbsp [q p u r s]<br>[l l j j h h b b p p r r t t v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b q p u] &nbsp [b q p r]<br>[s u q m k i g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j g h i f] &nbsp [f g h i j]<br>[j j x x l l x x p p x x b b x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[i i x x k k x x m m x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n f d e c] &nbsp [n c d e f]<br>[a x c x e x g x i x k x q x m x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[p u h s t] &nbsp [p u r s t]<br>[4 6 8 10 12 14 25 18 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j k] &nbsp [g i j k]<br>[20 18 16 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m b q p] &nbsp [m b q p u]<br>[1 1 3 3 5 5 7 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[6 0 7 0 8 0 9 0 10 0 11 0 12 0 13 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m b q] &nbsp [l m b q p]<br>[k k j j i i h h g g f f e e d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m s] &nbsp [j k l m b]<br>[u x p x q x h x m x l x k x j x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u r s t] &nbsp [u r s t o]<br>[18 0 17 0 16 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l q b m] &nbsp [k l m b q]<br>[24 0 23 0 21 0 22 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[3 5 7 9 11 13 15 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m b b q p u] &nbsp [m b q p u]<br>[b x l x j x h x f x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[q p u r] &nbsp [q p u s]<br>[25 24 23 22 21 20 19 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m b q p] &nbsp [m b q p u]<br>[11 11 13 13 15 15 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s t o v] &nbsp [s t o v w]<br>[6 6 8 8 10 10 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[25 23 21 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t o v w] &nbsp [t o v x]<br>[u x q x m x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j j k] &nbsp [g h i j k]<br>[a x a x c x e x g x i x k x m x q x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a n c i e] &nbsp [a n c d e]<br>[4 24 8 10 12 14 16 18 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[b x l x j x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s h o v] &nbsp [r s t o v]<br>[17 17 16 16 2 2 14 14 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l q b m] &nbsp [k l m b q]<br>[s u q m k c g e i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[n f d e c] &nbsp [n c d e f]<br>[16 0 24 0 18 0 19 0 20 0 21 0 22 0 23 0 17 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t o v r] &nbsp [s t o v w]<br>[20 20 4 4 6 6 8 8 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p u r] &nbsp [q p u r s]<br>[z z x x y y x x x x x x w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n c d] &nbsp [a n c d e]<br>[9 11 13 15 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l b m q p] &nbsp [l m b q p]<br>[g g x x i i x x h h x x j j x x f f x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s s t o v w] &nbsp [s t o v w]<br>[n n d d d d f f h h j j l l b b p p r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q p u d s] &nbsp [q p u r s]<br>[m m l l k k j j i i w w g g f f e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u r s t] &nbsp [p r s t]<br>[14 14 15 15 16 16 17 17 18 18 19 19 20 20 21 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t o] &nbsp [u s t o]<br>[l l x x k k x x j j x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[u u q q m m k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[y x w x o x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m w q p u] &nbsp [m b q p u]<br>[n x d x y x h x j x l x b x p x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m b]<br>[2 2 4 4 6 6 8 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[j x h x f x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t t o v w] &nbsp [s t o v w]<br>[a x c x e x g x i x k x k x m x q x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q p u r] &nbsp [q p u r s]<br>[13 0 15 0 17 0 19 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n c d e a] &nbsp [n c d e f]<br>[s s v v t t r r p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u r s t] &nbsp [p r s t]<br>[17 0 19 0 21 0 23 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k l m] &nbsp [j k l b]<br>[7 7 9 9 11 11 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l m b q q] &nbsp [k l m b q]<br>[f f h h j j l l l l b b p p r r t t v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[m b b q p u] &nbsp [m b q p u]<br>[19 17 17 15 13 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[n x d x f x h x j x l x b x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m u q p b] &nbsp [m b q p u]<br>[t t w w v v o o x x s s r r u u p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r u p s] &nbsp [q p u r s]<br>[11 11 0 0 12 12 0 0 13 13 0 0 15 15 0 0 14 14 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l m z] &nbsp [j k l m b]<br>[17 17 18 18 19 19 20 20 21 21 3 3 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p u r j t] &nbsp [p u r s t]<br>[r x u x p x q x b x s x l x k x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a n v d e] &nbsp [a n c d e]<br>[19 18 17 16 23 14 13 12 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a n d c e] &nbsp [a n c d e]<br>[22 22 18 18 19 19 20 20 21 21 17 17 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a a n c d e] &nbsp [a n c d e]<br>[u u x x s s x x s s x x o o x x w w x x y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i t k] &nbsp [g h i j k]<br>[20 19 18 17 16 15 14 4 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": [
      "o",
      "r",
      "l",
      "x",
      "e"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "o",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "r",
      "m",
      "n",
      "l",
      "p",
      "q",
      "x",
      "s",
      "t",
      "u",
      "v",
      "w",
      "e",
      "y",
      "z"
    ],
    "larger_int": [
      {
        "prompt": "[x s v u t] &nbsp [x s t u v]<br>[x p t v e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l p q x] &nbsp [l p q s]<br>[x t v e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l p q x] &nbsp [l p q s]<br>[p x t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d o] &nbsp [b c d o f]<br>[p x t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[o g i k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o f g h j] &nbsp [o f g h i]<br>[j r n s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j k r] &nbsp [i j k m]<br>[r n p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k r m c l] &nbsp [k r m n l]<br>[m l q s g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[x l p q n] &nbsp [n l p q x]<br>[x t e v z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l p q x] &nbsp [n p q x]<br>[r n p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[x s t u] &nbsp [x s t v]<br>[g h i j k r m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[f g h i j k r m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o f g h] &nbsp [o f g i]<br>[p q x s t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[j k r m n l p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k r m n] &nbsp [k r m n l]<br>[g h i j k r m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j i k r m] &nbsp [i j k r m]<br>[q v s t u x w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w e y] &nbsp [u w e y]<br>[j k r m n l p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l p q x] &nbsp [l p q x s]<br>[o f g h i j k r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w e y] &nbsp [u w e y]<br>[m n l p q x s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v w] &nbsp [t u v e]<br>[q x s t u v w e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[j k f m n] &nbsp [j k r m n]<br>[m m h h i i j j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w e]<br>[l l p p q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k r m l n] &nbsp [k r m n l]<br>[u u v v w w y y e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g r m n l] &nbsp [k r m n l]<br>[h h i i j j k k s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d o f g] &nbsp [d o f h]<br>[t t u u v v w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k r r m] &nbsp [i j k r m]<br>[s s t t u u v v w w w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j k] &nbsp [h i j r]<br>[k k r r m m n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l p q x] &nbsp [l p q x s]<br>[i i j j k k r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o f g h] &nbsp [d f g h]<br>[x x s s t t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a l p q x] &nbsp [n l p q x]<br>[h h i i j j k k s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[a c b d o] &nbsp [a b c d o]<br>[n x l x x x q x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[x x s x t x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[h x i x j x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u v e w y] &nbsp [u v w e y]<br>[y x w x e x v x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x s t u a] &nbsp [x s t u v]<br>[u x i x j x k x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k r m n] &nbsp [j r m n]<br>[n x l x p x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q x s t] &nbsp [q x s u]<br>[t x u x v x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d o f] &nbsp [b d o f]<br>[f x g x h x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k r m a] &nbsp [j k r m n]<br>[g x h x u x j x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r m n l] &nbsp [k m n l]<br>[n x l x p x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[l p q x s s] &nbsp [l p q x s]<br>[3 4 5 5 6 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o h g f i] &nbsp [o f g h i]<br>[23 22 21 24 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d] &nbsp [a b c o]<br>[14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q x s t] &nbsp [q x s u]<br>[16 17 18 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q x s t] &nbsp [q x s u]<br>[18 19 20 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[13 14 15 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r m n l] &nbsp [r m n l p]<br>[7 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d o f g x] &nbsp [d o f g h]<br>[2 3 4 21 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k r l n] &nbsp [j k r m n]<br>[21 2 3 4 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j m r k n] &nbsp [j k r m n]<br>[21 24 23 22 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[o f g h] &nbsp [d f g h]<br>[n m r k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[h g f o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w e] &nbsp [u v w e y]<br>[r k j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d o f] &nbsp [b d o f]<br>[y e w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t u v w] &nbsp [t u v e]<br>[k j i h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f j k r m] &nbsp [i j k r m]<br>[q p l n t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l p q x] &nbsp [n p q x]<br>[n m r k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v w] &nbsp [t u v e]<br>[g f o d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q q x s t] &nbsp [p q x s t]<br>[f o o d c b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n l p q] &nbsp [n l p q x]<br>[m r k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[m m n n l l p p q q x x s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w e] &nbsp [u v w e y]<br>[9 10 11 12 13 14 15 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[x x s t u v] &nbsp [x s t u v]<br>[n x m x r x r x k x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[s x x x q x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i f g h o] &nbsp [o f g h i]<br>[d d o o f f i i h h g g j j k k r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l p q x] &nbsp [n p q x]<br>[r r m m n n l l p p q q x x s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o f g h] &nbsp [d f g h]<br>[s x t x u x v x w x e x y x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o f g h i i] &nbsp [o f g h i]<br>[14 15 15 16 17 18 19 20 21 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c f g h i] &nbsp [o f g h i]<br>[20 20 21 21 8 8 23 23 24 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k r m n n l] &nbsp [k r m n l]<br>[k j i h g f f o d c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[j x r x n x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d o f] &nbsp [c d o g]<br>[t x p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d] &nbsp [a b c d o]<br>[6 5 4 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[2 0 3 0 4 0 5 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q t s x] &nbsp [p q x s t]<br>[o g i k m u q s l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q x s] &nbsp [p q x t]<br>[x x q q p p l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j k r] &nbsp [i j k m]<br>[11 11 12 12 13 13 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[y x e x w x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u e w v] &nbsp [t u v w e]<br>[x x s x t x e x v x w x u x y x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j k u] &nbsp [h i j k r]<br>[c c d d o o f f g g h h t t j j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[o f g h] &nbsp [o f g i]<br>[p x q x x x s x t x u x v x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[s s x x q q p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m n l p] &nbsp [m n l q]<br>[t x p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m n l p] &nbsp [m n l q]<br>[16 15 14 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[e v t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n l p q] &nbsp [n l p q x]<br>[f x g x h x i x j x k x r x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d o] &nbsp [a c d o]<br>[p x q x x x s x t x u x v x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w v e y z] &nbsp [v w e y z]<br>[d n h j r f p x t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d o f g] &nbsp [d o f g h]<br>[k k r r m m n n l l p p q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k r m l n] &nbsp [k r m n l]<br>[e e x x w w x x v v x x y y x x z z x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[n m r l p] &nbsp [r m n l p]<br>[j r n v x t p e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[16 17 18 19 20 21 22 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n l p q] &nbsp [m l p q]<br>[h h j j r r n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r m n l] &nbsp [r m n l p]<br>[10 11 12 13 14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c x o f g] &nbsp [c d o f g]<br>[4 0 5 0 6 0 7 0 3 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e v w u y] &nbsp [u v w e y]<br>[r x m x k x j x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[i k m l q s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w e y] &nbsp [v w e y z]<br>[x x q x p x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q n s t] &nbsp [p q x s t]<br>[7 25 9 10 11 12 13 14 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w e] &nbsp [u v w e y]<br>[r x m x n x l x p x q x x x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[p i x s t] &nbsp [p q x s t]<br>[11 3 13 14 15 16 17 18 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l l p q x s] &nbsp [l p q x s]<br>[m m r r k k j j i i i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o f g h] &nbsp [o f g i]<br>[n n l l p p q q x x s s t t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g i h j k] &nbsp [g h i j k]<br>[l x x x q x p x s x t x u x v x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x s t u v v] &nbsp [x s t u v]<br>[12 13 14 15 15 16 17 18 19 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r m n l] &nbsp [r m n p]<br>[j j r r n n p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x s t u] &nbsp [q s t u]<br>[i x j x k x r x m x n x l x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n l p q] &nbsp [n l p q x]<br>[z e v t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[v v x x w w x x e e x x y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j f r] &nbsp [h i j k r]<br>[g g f f r r d d c c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[u w v e y] &nbsp [u v w e y]<br>[n n p p t t x x v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k k r m] &nbsp [i j k r m]<br>[14 14 15 15 16 16 16 16 17 17 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d d o f] &nbsp [b c d o f]<br>[a c o o g i k m l q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d o f g h h] &nbsp [d o f g h]<br>[l l x x p p x x q q x x x x x x x x x x s s x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r m n l] &nbsp [r m n p]<br>[15 17 19 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l p q x] &nbsp [l p q x s]<br>[14 14 15 15 16 16 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x x s t u v] &nbsp [x s t u v]<br>[r k j i i h g f o d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k r] &nbsp [i j k m]<br>[e x w x v x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q l p n x] &nbsp [n l p q x]<br>[16 16 13 13 14 14 15 15 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[6 7 8 9 10 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[o x d x c x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f c d o b] &nbsp [b c d o f]<br>[h t r n p x j v e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q x s] &nbsp [l q x s]<br>[j j r r n n p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k r m m n l] &nbsp [k r m n l]<br>[u u t t s s x x q q q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d o g f] &nbsp [c d o f g]<br>[14 14 17 17 16 16 15 15 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r m n l l p] &nbsp [r m n l p]<br>[16 17 18 19 19 20 21 22 23 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n l p] &nbsp [m n l q]<br>[o o f f g g h h i i j j k k r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b c d] &nbsp [a b c o]<br>[u t s x q p l n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y w e v z] &nbsp [v w e y z]<br>[5 7 6 8 9 10 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[18 17 16 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[c d o f g g] &nbsp [c d o f g]<br>[q q q q l l m m k k i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r m n l] &nbsp [k m n l]<br>[d d f f h h j j r r n n p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c d o f j] &nbsp [c d o f g]<br>[23 22 21 20 12 18 17 16 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[x s t u] &nbsp [q s t u]<br>[w u s q l m k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c d] &nbsp [a b c o]<br>[z e v t x p n r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w e] &nbsp [u v w y]<br>[1 0 3 0 5 0 7 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e w v y z] &nbsp [v w e y z]<br>[14 16 12 10 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f o d g h] &nbsp [d o f g h]<br>[c c k k g g i i o o m m l l q q s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d o f g] &nbsp [d o f h]<br>[a a x x b b x x c c x x d d x x o o x x f f x x g g x x h h x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d o f g] &nbsp [d o f g h]<br>[5 7 9 11 13 15 17 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[c d o f] &nbsp [c d o f g]<br>[1 0 3 0 5 0 7 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j j k r] &nbsp [h i j k r]<br>[12 12 0 0 13 13 0 0 14 14 0 0 15 15 0 0 16 16 0 0 16 16 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g h i] &nbsp [o g h i]<br>[n x r x j x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j m r k] &nbsp [i j k r m]<br>[11 0 19 0 13 0 14 0 15 0 16 0 17 0 18 0 12 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d o f f g] &nbsp [c d o f g]<br>[19 19 18 18 17 17 16 16 16 16 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o f x h i] &nbsp [o f g h i]<br>[r x k x j x i x h x g x f x u x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o f g h] &nbsp [o f g h i]<br>[s q l m k i g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n n l p q x] &nbsp [n l p q x]<br>[17 15 13 11 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o f g h] &nbsp [d f g h]<br>[e v t x p n r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b c d] &nbsp [a b c d o]<br>[l x m x k x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[v w d y z] &nbsp [v w e y z]<br>[17 0 26 0 15 0 14 0 13 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q x s t] &nbsp [q x s t u]<br>[i i h h g g f f o o d d c c b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q x x s t u] &nbsp [q x s t u]<br>[d d x x o o x x o o x x f f x x g g x x h h x x i i x x j j x x k k x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w u v t e] &nbsp [t u v w e]<br>[11 15 13 17 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n l l p q x] &nbsp [n l p q x]<br>[r r k k k k j j i i h h g g f f o o d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a b c d] &nbsp [a b c o]<br>[q x p x l x n x m x r x k x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[n n x x l l x x p p x x q q x x x x x x s s x x t t x x u u x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n x s t u] &nbsp [q x s t u]<br>[a a x x s s x x c c x x d d x x o o x x f f x x g g x x h h x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o f f g h i] &nbsp [o f g h i]<br>[11 11 9 7 5 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r m l n p] &nbsp [r m n l p]<br>[11 9 7 3 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[n l p q x x] &nbsp [n l p q x]<br>[b b d d d d f f h h j j r r n n p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d f o g] &nbsp [c d o f g]<br>[o o g g i i q q m m l l k k s s u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q x s] &nbsp [p q x s t]<br>[o o g g i i k k m m l l q q s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q x s t] &nbsp [q x s u]<br>[o o g g i i k k m m l l q q s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[j x r x n x p x x x t x v x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l p x q s] &nbsp [l p q x s]<br>[v v u u t t s s x x q q p p n n l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v] &nbsp [x t u v]<br>[16 16 0 0 17 17 0 0 18 18 0 0 19 19 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c d o f f] &nbsp [b c d o f]<br>[17 17 16 15 14 13 12 11 10 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k r m n] &nbsp [j r m n]<br>[10 0 11 0 12 0 13 0 14 0 15 0 16 0 17 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[w x v x u x t x s x x x q x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[13 12 11 10 9 8 7 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m n l p] &nbsp [r n l p]<br>[10 9 8 7 6 5 4 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w w e y z] &nbsp [v w e y z]<br>[18 17 16 16 15 14 13 12 11 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r r m n l p] &nbsp [r m n l p]<br>[4 4 0 0 5 5 0 0 6 6 0 0 7 7 0 0 7 7 0 0 8 8 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d o f g g] &nbsp [c d o f g]<br>[14 12 10 10 8 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k r m] &nbsp [j k r n]<br>[9 0 10 0 11 0 12 0 13 0 14 0 15 0 16 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d o] &nbsp [b c d o f]<br>[u u s s q q l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w e y] &nbsp [v w e y z]<br>[15 0 16 0 17 0 18 0 19 0 20 0 21 0 22 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k r w] &nbsp [i j k r m]<br>[22 0 14 0 16 0 18 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b t d o] &nbsp [a b c d o]<br>[b b x x c c x x d d x x o o x x m m x x g g x x h h x x i i x x j j x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[16 16 15 15 14 14 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r m n l p p] &nbsp [r m n l p]<br>[i i k k m m l l q q s s u u w w y y y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l r m n k] &nbsp [k r m n l]<br>[9 0 6 0 7 0 8 0 5 0 10 0 11 0 12 0 13 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u s t x v] &nbsp [x s t u v]<br>[1 3 5 7 9 11 13 17 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y p q x s] &nbsp [l p q x s]<br>[1 1 19 19 5 5 7 7 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n l p q] &nbsp [m l p q]<br>[24 23 22 21 20 19 18 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k r m] &nbsp [i k r m]<br>[13 0 15 0 17 0 19 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[26 0 25 0 24 0 23 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[p p x x l l x x n n x x m m x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n l p k x] &nbsp [n l p q x]<br>[7 0 9 0 8 0 13 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[i i x x j j x x k k x x r r x x m m x x n n x x l l x x p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p q x s] &nbsp [p q x s t]<br>[3 3 5 5 7 7 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k r m n n l] &nbsp [k r m n l]<br>[y y w w u u s s s s q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n l p q] &nbsp [n l p q x]<br>[z e v t x p n r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r p n l m] &nbsp [r m n l p]<br>[23 0 24 0 22 0 21 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w e] &nbsp [u v w e y]<br>[y w u s q l m k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d o f] &nbsp [c d o g]<br>[v t x p n r j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l p x q s] &nbsp [l p q x s]<br>[h x j x r x t x p x x x n x v x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c d o f] &nbsp [c d o f g]<br>[24 23 22 21 20 19 18 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b n d o f] &nbsp [b c d o f]<br>[20 19 18 17 16 1 14 13 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": [
      "q",
      "o",
      "a",
      "h",
      "m"
    ],
    "shuffled_alphabet": [
      "q",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "o",
      "i",
      "j",
      "k",
      "l",
      "a",
      "n",
      "h",
      "p",
      "m",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "larger_int": [
      {
        "prompt": "[i j k l] &nbsp [o j k l]<br>[k a h m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c q e f] &nbsp [b c d e f]<br>[h r s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g o i] &nbsp [f g o i j]<br>[i k a h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l a n] &nbsp [k l a n h]<br>[g i k a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o i j k] &nbsp [o i j k l]<br>[k a h m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[c e g i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[k a h m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[q c e g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l o n h] &nbsp [k l a n h]<br>[b d w o j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[j k l a n h p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g g o i] &nbsp [e f g o i]<br>[q b c d e f f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n m p h r] &nbsp [n h p m r]<br>[f e g o i j k l a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[f g o i j k l a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[k l a n h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n h p m] &nbsp [n h p r]<br>[a n h p m r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a m h p n] &nbsp [a n h p m]<br>[o i j k a l n h p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h p m r] &nbsp [n p m r]<br>[l a n h p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l h n a p] &nbsp [l a n h p]<br>[c d f e g o i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n h p m m r] &nbsp [n h p m r]<br>[f g o o i j k l a n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[l a n h] &nbsp [l a n h p]<br>[m m r r s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c d] &nbsp [q b c d e]<br>[t t u u v v w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t t u v] &nbsp [r s t u v]<br>[h h p p m m r r s s s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l a] &nbsp [i k l a]<br>[l l a a n n h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q b c w e] &nbsp [q b c d e]<br>[e e h h g g o o i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[a a n n h h p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h l a n k] &nbsp [k l a n h]<br>[h h p p m m s s r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r s t v u] &nbsp [r s t u v]<br>[o o g g i i j j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g o i] &nbsp [e g o i]<br>[l l a a n n h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l a n h] &nbsp [l a n h p]<br>[d d e e f f g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[a n h p] &nbsp [l n h p]<br>[r x s x t x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o i j k] &nbsp [o i j k l]<br>[d x e x f x g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[c x d x e x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q b c j e] &nbsp [q b c d e]<br>[o x b x j x k x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o i j k] &nbsp [g i j k]<br>[g x o x i x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[h x p x m x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l a n h f] &nbsp [l a n h p]<br>[c x d x q x f x g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l l a n h p] &nbsp [l a n h p]<br>[o x i x j x j x k x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[i x j x k x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f g i o] &nbsp [e f g o i]<br>[m x r x s x u x t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[c d e f] &nbsp [c d e f g]<br>[10 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c d] &nbsp [q b c d e]<br>[2 3 4 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e] &nbsp [q c d e]<br>[3 4 5 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n h p w] &nbsp [a n h p m]<br>[10 2 12 13 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q b c d w] &nbsp [q b c d e]<br>[9 15 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q b c d] &nbsp [q b c d e]<br>[5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s t u] &nbsp [m s t u]<br>[3 4 5 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n h p m] &nbsp [n h p m r]<br>[11 12 13 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g j i o k] &nbsp [g o i j k]<br>[17 15 16 14 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n m p h r] &nbsp [n h p m r]<br>[11 15 13 14 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[p m r s] &nbsp [p m r t]<br>[h n a l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[r m p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[n a l k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[o g f e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[i o g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g o i] &nbsp [e g o i]<br>[p h n a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[u t s r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[r m p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c r e f] &nbsp [b c d e f]<br>[m p h n k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l a]<br>[y x w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[p m r s] &nbsp [h m r s]<br>[x w v u t s r m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[22 0 23 0 24 0 25 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m r s t] &nbsp [m r s u]<br>[h h p p m m r r s s t t u u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g g o i j] &nbsp [f g o i j]<br>[i x o x g x g x f x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[k k a a h h m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q b c d] &nbsp [q b c d e]<br>[l l x x a a x x n n x x h h x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[q q c c e e g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p m k s t] &nbsp [p m r s t]<br>[p n s j o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l a n] &nbsp [k l a n h]<br>[13 14 15 16 17 18 19 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h n a p m] &nbsp [a n h p m]<br>[8 10 14 12 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[15 15 16 16 17 17 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c o e] &nbsp [q b c d e]<br>[5 0 18 0 7 0 8 0 9 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[i i k k a a h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a a n h p m] &nbsp [a n h p m]<br>[w v u t s r m p p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o i j k] &nbsp [g i j k]<br>[s r m p h n a l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n h p m] &nbsp [n h p m r]<br>[x x w w v v u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l a n d p] &nbsp [l a n h p]<br>[9 12 14 16 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o i j k] &nbsp [o i j k l]<br>[a a h h m m s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[g g f f e e d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n h p] &nbsp [a n h p m]<br>[g g o o i i j j k k l l a a n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[p m r v t] &nbsp [p m r s t]<br>[s s r r m m o o h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h s m r p] &nbsp [h p m r s]<br>[12 10 8 14 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[h h m m s s u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[k k a a h h m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s p m r h] &nbsp [h p m r s]<br>[y x m v u t s r w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x u v w t] &nbsp [t u v w x]<br>[g x j x i x o x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m r s t] &nbsp [p r s t]<br>[u s m h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[15 0 16 0 17 0 18 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f g o i] &nbsp [f g o j]<br>[a a n n h h p p m m r r s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[q b c d m] &nbsp [q b c d e]<br>[e g i k a h m q u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d e] &nbsp [b c d e f]<br>[i o g f e d c b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p m r s] &nbsp [h m r s]<br>[u u w w y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f k l a n] &nbsp [j k l a n]<br>[b p h n a l k j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k l a a n h] &nbsp [k l a n h]<br>[f f o o j j l l l l n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o f g e i] &nbsp [e f g o i]<br>[1 4 3 2 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[h x n x a x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t w v u x] &nbsp [t u v w x]<br>[f x o x l x j x n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o j i k l] &nbsp [o i j k l]<br>[q c e g i m a h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[h a k i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[i o j k l] &nbsp [o i j k l]<br>[16 16 14 14 15 15 13 13 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c f g o i] &nbsp [e f g o i]<br>[u s w h a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g g o i] &nbsp [e f g o i]<br>[9 9 10 10 11 11 11 11 12 12 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p m s r t] &nbsp [p m r s t]<br>[f x c x d x e x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f g j i] &nbsp [e f g o i]<br>[s x r x a x p x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l a]<br>[q q x x b b x x c c x x d d x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[k j i o g f e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a a n h p m] &nbsp [a n h p m]<br>[2 3 4 5 6 7 8 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m s r t u] &nbsp [m r s t u]<br>[e g h k a i m s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[h x p x m x r x s x t x u x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[g w x y z] &nbsp [v w x y z]<br>[q x k x a x h x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h p m r r s] &nbsp [h p m r s]<br>[l l k k j j i i i i o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h p m r] &nbsp [h p m s]<br>[5 7 9 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n h h p m] &nbsp [a n h p m]<br>[r x s x t x u x v x w x w x x x y x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[h h m m s s u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h p m r] &nbsp [n p m r]<br>[2 2 3 3 4 4 5 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k c a n h] &nbsp [k l a n h]<br>[17 0 2 0 19 0 20 0 21 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[f x e x d x c x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v f] &nbsp [s t u v w]<br>[8 13 15 17 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v w i] &nbsp [t u v w x]<br>[k x l x a x n x h x e x m x r x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[o i a k l] &nbsp [o i j k l]<br>[s m h z k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x b c d e] &nbsp [q b c d e]<br>[b b x x c c x x d d x x j j x x f f x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[o x g x f x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q o c d e] &nbsp [q b c d e]<br>[24 23 22 2 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h p m r] &nbsp [h p m s]<br>[j o f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n h p m] &nbsp [n h p m r]<br>[k k j j i i o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o i j h l] &nbsp [o i j k l]<br>[13 0 14 0 15 0 16 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g o i i j k] &nbsp [g o i j k]<br>[s x s x r x m x p x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l a n h h] &nbsp [k l a n h]<br>[v t t r p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[1 2 3 4 5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[p m r s] &nbsp [p m r s t]<br>[i x o x g x f x e x d x c x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l a t] &nbsp [j k l a n]<br>[w w l l u u t t s s r r m m p p h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g z i j] &nbsp [f g o i j]<br>[25 0 6 0 5 0 4 0 3 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l a]<br>[y y x x x x x x w w x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m r s t] &nbsp [m r s u]<br>[13 13 14 14 15 15 16 16 17 17 18 18 19 19 20 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e] &nbsp [q c d e]<br>[d d f f o o j j l l n n p p r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d e f]<br>[17 0 19 0 21 0 23 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[y w u s m h a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k n h p m] &nbsp [a n h p m]<br>[z x v t r p n l b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n h p p m] &nbsp [a n h p m]<br>[p x h x n x n x a x l x k x j x i x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[h p m r] &nbsp [h p m s]<br>[18 18 17 17 16 16 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t u o w] &nbsp [s t u v w]<br>[i x k x a x h x r x s x u x w x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n h p m] &nbsp [n h p r]<br>[5 7 9 11 13 15 17 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h p m r] &nbsp [h p m s]<br>[h x n x a x l x k x j x i x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s u t v] &nbsp [r s t u v]<br>[r p n l j o d f b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h p m r] &nbsp [h p m r s]<br>[3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[11 11 10 10 9 9 8 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d d e f g o] &nbsp [d e f g o]<br>[2 0 4 0 6 0 8 0 10 0 10 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g o n j k] &nbsp [g o i j k]<br>[q q x x c c x x e e x x g g x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w z y] &nbsp [u v w x y]<br>[j x o x f x d x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[17 17 19 19 21 21 23 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[j j x x i i x x o o x x g g x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p m r s] &nbsp [p m r t]<br>[8 8 7 7 6 6 5 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[a a k k i i g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p p m r s t] &nbsp [p m r s t]<br>[7 7 9 9 11 11 11 11 13 13 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[18 0 19 0 20 0 21 0 22 0 23 0 24 0 25 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e f g o] &nbsp [e f g i]<br>[4 0 5 0 6 0 7 0 8 0 9 0 10 0 11 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n h p m r r] &nbsp [n h p m r]<br>[12 12 0 0 13 13 0 0 13 13 0 0 14 14 0 0 15 15 0 0 16 16 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g o i i j] &nbsp [f g o i j]<br>[8 10 12 12 14 16 18 20 22 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[n n l l j j o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[7 7 9 9 11 11 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c y e] &nbsp [q b c d e]<br>[k x a x h x m x p x u x w x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p m r r s t] &nbsp [p m r s t]<br>[p p h h n n n n a a l l k k j j i i o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d e f f] &nbsp [b c d e f]<br>[1 0 2 0 3 0 4 0 5 0 6 0 6 0 7 0 8 0 9 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i i j k l a] &nbsp [i j k l a]<br>[16 16 15 15 15 15 14 14 13 13 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[16 16 15 15 14 14 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c a n h p] &nbsp [l a n h p]<br>[l l a a k k i i g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l n a h p] &nbsp [l a n h p]<br>[20 0 18 0 19 0 17 0 16 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e f g] &nbsp [d e f o]<br>[g g x x i i x x k k x x a a x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f g o] &nbsp [e f g i]<br>[o o x x i i x x j j x x k k x x l l x x a a x x n n x x h h x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[l k a n h] &nbsp [k l a n h]<br>[5 7 9 11 13 17 15 19 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g o i] &nbsp [f g o j]<br>[5 0 4 0 3 0 2 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q b c c d e] &nbsp [q b c d e]<br>[l l k k j j i i o o o o g g f f e e d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d o f g] &nbsp [c d e f g]<br>[i x o x g x f x e x v x c x b x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[9 9 11 11 13 13 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o i j w l] &nbsp [o i j k l]<br>[12 0 2 0 14 0 15 0 16 0 17 0 18 0 19 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[s s m m h h a a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d e f g] &nbsp [c e f g]<br>[a x h x m x s x u x w x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o i j k k l] &nbsp [o i j k l]<br>[q x c x e x g x i x k x a x h x m x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l a n p h] &nbsp [l a n h p]<br>[c c x x d d x x e e x x b b x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[g o i j] &nbsp [g o i j k]<br>[15 15 16 16 17 17 18 18 19 19 20 20 21 21 22 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n h p m] &nbsp [n h p r]<br>[q q x x c c x x e e x x g g x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[z z y y x x w w v v u u t t s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l a n] &nbsp [k l a h]<br>[14 14 16 16 18 18 20 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l l a n h p] &nbsp [l a n h p]<br>[x x w w v v u u t t s s s s r r m m p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[16 15 14 13 12 11 10 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[1 3 5 7 9 11 13 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[9 9 11 11 13 13 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o i u k l] &nbsp [o i j k l]<br>[11 0 21 0 15 0 17 0 19 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[r r x x m m x x p p x x h h x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[h p m r l] &nbsp [h p m r s]<br>[7 7 22 22 9 9 10 10 11 11 12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n h p m m r] &nbsp [n h p m r]<br>[u x s x m x h x h x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g i o j] &nbsp [f g o i j]<br>[1 1 0 0 5 5 0 0 3 3 0 0 4 4 0 0 2 2 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t u] &nbsp [m s t u]<br>[8 8 9 9 10 10 11 11 12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l a] &nbsp [j k l n]<br>[e e x x d d x x c c x x b b x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[b b x x d d x x f f x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[8 8 10 10 12 12 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[15 0 14 0 13 0 12 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l a n h] &nbsp [k a n h]<br>[16 15 14 13 12 11 10 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g o i j] &nbsp [f o i j]<br>[15 15 14 14 13 13 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": [
      "g",
      "q",
      "z",
      "n",
      "b"
    ],
    "shuffled_alphabet": [
      "a",
      "g",
      "c",
      "d",
      "e",
      "f",
      "q",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "z",
      "o",
      "p",
      "n",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "b"
    ],
    "larger_int": [
      {
        "prompt": "[e f q q h i] &nbsp [e f q h i]<br>[r t v x x b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z o p n] &nbsp [z o p r]<br>[c e q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[c e q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v b x y w] &nbsp [v w x y b]<br>[k s o n m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f q v i j] &nbsp [f q h i j]<br>[l z p c t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d d e f q] &nbsp [c d e f q]<br>[a c c e q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[m o n s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f q h] &nbsp [e f q h i]<br>[g d f h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t u] &nbsp [n s t u]<br>[t v x b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n f s t u] &nbsp [n r s t u]<br>[m j n s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[p s r n t] &nbsp [p n r s t]<br>[j k l m z r p n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n r s t] &nbsp [n r s u]<br>[q h i j k l m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[z o p n r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[i j k l m z o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w w x y b] &nbsp [v w x y b]<br>[o p n r r s t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q q h i j k] &nbsp [q h i j k]<br>[a g c d d e f q h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m z] &nbsp [j l m z]<br>[z o p n r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o p n r] &nbsp [o p n s]<br>[z o p n r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i w k l m] &nbsp [i j k l m]<br>[q h i j k l x z o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m z o p p n] &nbsp [m z o p n]<br>[i i j k l m z o p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[m z o p] &nbsp [l z o p]<br>[u u v v w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l m z] &nbsp [j l m z]<br>[v v w w x x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m z o] &nbsp [l m z o p]<br>[v v w w x x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t u] &nbsp [n s t u]<br>[g g c c d d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q h i e k] &nbsp [q h i j k]<br>[g g c c d d e e p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o p n s r] &nbsp [o p n r s]<br>[g g c c f f e e d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m z] &nbsp [j l m z]<br>[j j k k l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[d d e e f f q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c d e f] &nbsp [c d e q]<br>[j j k k l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g c d e] &nbsp [a c d e]<br>[z z o o p p n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[l m p o z] &nbsp [l m z o p]<br>[g x a x c x d x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z p n r s] &nbsp [o p n r s]<br>[v x w x c x y x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w p n r s] &nbsp [o p n r s]<br>[q x c x d x e x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f q h i] &nbsp [f q h j]<br>[h x i x j x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m z o p] &nbsp [m z o p n]<br>[j x k x l x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f q h] &nbsp [d f q h]<br>[v x w x x x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g c d e] &nbsp [a c d e]<br>[q x h x i x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q h i w k] &nbsp [q h i j k]<br>[w x i x j x k x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m g c d e] &nbsp [a g c d e]<br>[m x d x e x f x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i h q j k] &nbsp [q h i j k]<br>[j x i x h x k x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[r s t u] &nbsp [n s t u]<br>[2 3 4 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f q h i] &nbsp [f q h j]<br>[1 2 3 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a g c d] &nbsp [a g c e]<br>[14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g f d e c] &nbsp [g c d e f]<br>[5 4 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g c d e] &nbsp [g c d f]<br>[7 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[z o p n] &nbsp [z o p r]<br>[11 12 13 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q h i j] &nbsp [q h i j k]<br>[22 23 24 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v a x y b] &nbsp [v w x y b]<br>[13 2 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e f q] &nbsp [d e f h]<br>[14 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f q]<br>[4 5 6 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[s t w v u] &nbsp [s t u v w]<br>[b w x y v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m z]<br>[b y x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e h q f i] &nbsp [e f q h i]<br>[q f e c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l] &nbsp [h j k l]<br>[p o z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p n r] &nbsp [o p n r s]<br>[z m l k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g c d e] &nbsp [g c d e f]<br>[b y x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v v w x] &nbsp [t u v w x]<br>[b b y x w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w b y x] &nbsp [v w x y b]<br>[g d c e a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a g c b e] &nbsp [a g c d e]<br>[r n l o z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f f q h i] &nbsp [e f q h i]<br>[o z m l l k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[l m z o] &nbsp [l m z p]<br>[o z m l k j i h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f f q h i j] &nbsp [f q h i j]<br>[i k m o n s u w w y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d e f q] &nbsp [c e f q]<br>[o o z z m m l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z o p n] &nbsp [z o p n r]<br>[1 1 2 2 3 3 4 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a g c d] &nbsp [a g c e]<br>[18 17 16 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m f o p n] &nbsp [m z o p n]<br>[w v y t s r n p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f f q h i j] &nbsp [f q h i j]<br>[h x i x j x j x k x l x m x z x o x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f q j i h] &nbsp [f q h i j]<br>[k k j j i i l l m m z z o o p p n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n r s t] &nbsp [p r s t]<br>[t t v v x x b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x y] &nbsp [v w x b]<br>[b y x w v u t s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[z o o p n r] &nbsp [z o p n r]<br>[16 18 18 20 22 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[14 14 15 15 16 16 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g c d e] &nbsp [g c d f]<br>[h h q q f f e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l l m z] &nbsp [j k l m z]<br>[q i k k m o n s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a g c d] &nbsp [a g c e]<br>[v x u x t x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[5 5 6 6 7 7 8 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z q h i j] &nbsp [f q h i j]<br>[x w v u t s j n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e f] &nbsp [c d e q]<br>[g g d d f f h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n r s t] &nbsp [n r s t u]<br>[22 0 23 0 24 0 25 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[r n p o z m l k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[q h i j] &nbsp [q h i k]<br>[11 11 12 12 13 13 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l m z] &nbsp [k l m o]<br>[g d f h j l z p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g c d e] &nbsp [g c d f]<br>[b b y y x x w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o m z l p] &nbsp [l m z o p]<br>[9 9 7 7 8 8 6 6 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k l m z] &nbsp [k l m o]<br>[1 2 3 4 5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p n r s] &nbsp [o n r s]<br>[i i k k m m o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x y b] &nbsp [v x y b]<br>[20 20 21 21 22 22 23 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o p n r] &nbsp [o p n s]<br>[f h j l z p r t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v w a] &nbsp [t u v w x]<br>[1 0 2 0 3 0 15 0 5 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f q j] &nbsp [d e f q h]<br>[11 10 9 8 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[e f q h] &nbsp [e f q i]<br>[n n p p o o z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m z z o p] &nbsp [l m z o p]<br>[w u s s n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z o p n n r] &nbsp [z o p n r]<br>[r r s s t t u u v v w w x x y y b b b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v x w y b] &nbsp [v w x y b]<br>[16 0 17 0 19 0 18 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o d e f q] &nbsp [c d e f q]<br>[a c e q i k m o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w y x] &nbsp [u v w x y]<br>[t x m x z x o x p x n x r x s x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y y b] &nbsp [v w x y b]<br>[p x p x r x t x v x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t c d e f] &nbsp [g c d e f]<br>[l l x x m m x x z z x x h h x x p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x y] &nbsp [v w x b]<br>[15 17 19 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p n r s] &nbsp [p n r t]<br>[b x y x x x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[o p n r] &nbsp [z p n r]<br>[h h j j l l z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d q f e] &nbsp [c d e f q]<br>[9 10 11 17 13 14 15 16 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m z o] &nbsp [l m z p]<br>[r r t t v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x x y b] &nbsp [v w x y b]<br>[p p n n r r s s t t u u u u v v w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e m z o p] &nbsp [l m z o p]<br>[16 16 2 2 3 3 4 4 5 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f q i h] &nbsp [e f q h i]<br>[g x c x j x e x f x q x h x i x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p n r s] &nbsp [o n r s]<br>[d x c x g x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u v y x w] &nbsp [u v w x y]<br>[i x h x f x q x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[k m o n s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a g c d] &nbsp [a g c d e]<br>[k m o n s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[i j k l l m] &nbsp [i j k l m]<br>[5 0 6 0 7 0 8 0 9 0 9 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[r r s s t t u u v v w w x x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y o p n r] &nbsp [z o p n r]<br>[f h k l z p r t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g c d e] &nbsp [g c d e f]<br>[i h q f e d c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k j i l m] &nbsp [i j k l m]<br>[g g x x d d x x c c x x e e x x f f x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[n n x x r r x x s s x x t t x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l m z o] &nbsp [l m z o p]<br>[4 0 5 0 6 0 7 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m z o p] &nbsp [l z o p]<br>[p p o o z z m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l m z] &nbsp [k l m z o]<br>[q x h x i x j x k x l x m x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l m z] &nbsp [k l m o]<br>[a a x x g g x x c c x x d d x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[m z o o p n] &nbsp [m z o p n]<br>[a c e q i k m o o n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m z]<br>[e x q x i x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k c m z o] &nbsp [k l m z o]<br>[z s j h f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a h i j k] &nbsp [q h i j k]<br>[7 6 5 22 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k] &nbsp [q i j k]<br>[p o z m l k j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l m]<br>[2 3 4 5 6 7 8 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e c d g f] &nbsp [g c d e f]<br>[m m z z o o r r n n p p s s t t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c g a d e] &nbsp [a g c d e]<br>[n k m o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h j i k l] &nbsp [h i j k l]<br>[g g d d j j h h f f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f i h q j] &nbsp [f q h i j]<br>[26 24 25 23 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[i j k l] &nbsp [i j k l m]<br>[b x v t r p z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[5 0 4 0 3 0 2 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q f h i j] &nbsp [f q h i j]<br>[g g x x d d x x h h x x f f x x j j x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l m m z] &nbsp [j k l m z]<br>[9 0 8 0 7 0 6 0 5 0 5 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d e f q] &nbsp [d e f q h]<br>[k k x x l l x x m m x x z z x x o o x x p p x x n n x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f q h i m] &nbsp [f q h i j]<br>[v x n x o x m x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x y b] &nbsp [v x y b]<br>[c c x x e e x x q q x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x y] &nbsp [v w x b]<br>[m m x x l l x x k k x x j j x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a g c d j] &nbsp [a g c d e]<br>[m x k x r x q x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r o p n z] &nbsp [z o p n r]<br>[11 11 0 0 12 12 0 0 15 15 0 0 14 14 0 0 13 13 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[n r e t u] &nbsp [n r s t u]<br>[26 26 5 5 4 4 3 3 2 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a g c d] &nbsp [a g c e]<br>[14 14 15 15 16 16 17 17 18 18 19 19 20 20 21 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a g c x e] &nbsp [a g c d e]<br>[9 11 13 15 17 22 21 23 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x l b] &nbsp [v w x y b]<br>[g g x x d d x x l l x x h h x x j j x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g c d l f] &nbsp [g c d e f]<br>[b x x x v x d x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f f q] &nbsp [c d e f q]<br>[1 0 3 0 5 0 7 0 7 0 9 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[18 18 19 19 20 20 21 21 22 22 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[z o p n] &nbsp [z o p r]<br>[b b y y x x w w v v u u t t s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o p n r] &nbsp [z p n r]<br>[k k x x l l x x m m x x z z x x o o x x p p x x n n x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[z o p n v] &nbsp [z o p n r]<br>[t t r r p p n n l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[j c l m z] &nbsp [j k l m z]<br>[14 14 15 15 5 5 17 17 18 18 19 19 20 20 21 21 22 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m u o p] &nbsp [l m z o p]<br>[5 0 25 0 9 0 11 0 13 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g c d e] &nbsp [g c d f]<br>[14 13 12 11 10 9 8 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e f q h] &nbsp [d f q h]<br>[16 15 14 13 12 11 10 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y b]<br>[j j x x i i x x h h x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f q h] &nbsp [e f q i]<br>[3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e f q h] &nbsp [e f q h i]<br>[9 8 7 6 5 4 3 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[y y x x w w v v u u t t s s r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x o b] &nbsp [v w x y b]<br>[a a c c e e q q i i k k h h o o n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w x y b] &nbsp [v x y b]<br>[15 15 0 0 16 16 0 0 17 17 0 0 18 18 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[d e f q h h] &nbsp [d e f q h]<br>[26 0 25 0 24 0 24 0 23 0 22 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d e f] &nbsp [g d e f]<br>[x x v v t t r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k z m l o] &nbsp [k l m z o]<br>[b x r x v x t x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[j j h h f f d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f q h i i j] &nbsp [f q h i j]<br>[q x i x k x m x o x n x s x s x u x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f] &nbsp [c d e q]<br>[14 12 10 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q h i j] &nbsp [q h i k]<br>[r p z l j h f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[5 0 4 0 3 0 2 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u u v w x y] &nbsp [u v w x y]<br>[12 12 14 14 14 14 16 16 18 18 20 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p n r s] &nbsp [p n r s t]<br>[v x u x t x s x r x n x p x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[e e x x d d x x c c x x g g x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a a g c d e] &nbsp [a g c d e]<br>[20 20 19 19 18 18 17 17 17 17 16 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k m l z o] &nbsp [k l m z o]<br>[1 0 4 0 3 0 2 0 5 0 6 0 7 0 8 0 9 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m z o p] &nbsp [l z o p]<br>[8 10 12 14 16 18 20 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o f q h i] &nbsp [e f q h i]<br>[k k m m o o n n s s u u t t y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d c e f q] &nbsp [c d e f q]<br>[y y x x u u v v w w t t s s r r n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u y w x] &nbsp [t u v w x]<br>[19 18 17 16 15 14 3 12 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u v x w y] &nbsp [u v w x y]<br>[11 0 15 0 13 0 17 0 19 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e f q] &nbsp [d e f q h]<br>[1 1 0 0 2 2 0 0 3 3 0 0 4 4 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[a a x x g g x x c c x x d d x x e e x x f f x x q q x x h h x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[l m z o] &nbsp [l m z o p]<br>[23 21 19 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[26 0 25 0 24 0 23 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [q i j k]<br>[20 0 22 0 24 0 26 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z p o n r] &nbsp [z o p n r]<br>[6 6 0 0 7 7 0 0 9 9 0 0 8 8 0 0 10 10 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f q h] &nbsp [e f q i]<br>[z z m m l l k k j j i i h h q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f q h i] &nbsp [f q h i j]<br>[2 0 4 0 6 0 8 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m z] &nbsp [k l m z o]<br>[18 18 17 17 16 16 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n r s t] &nbsp [n r s u]<br>[11 9 7 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w h y b] &nbsp [v w x y b]<br>[4 4 6 6 8 8 10 10 3 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f q]<br>[s s r r n n p p o o z z m m l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[r s t u] &nbsp [n s t u]<br>[25 0 24 0 23 0 22 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v w x y b b] &nbsp [v w x y b]<br>[15 15 15 15 17 17 19 19 21 21 23 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z o p n] &nbsp [z o p r]<br>[j j x x l l x x z z x x p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f q q h i j] &nbsp [f q h i j]<br>[9 8 7 7 6 5 4 3 2 1] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o n p r s] &nbsp [o p n r s]<br>[q q s s k k m m o o n n i i u u w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f q h] &nbsp [d f q h]<br>[4 0 3 0 2 0 1 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i s k l] &nbsp [h i j k l]<br>[r r x x j j x x t t x x u u x x v v x x w w x x x x x x y y x x b b x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l m m z o] &nbsp [k l m z o]<br>[l l x x m m x x z z x x o o x x p p x x p p x x n n x x r r x x s s x x t t x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q h i j] &nbsp [q h i j k]<br>[9 8 7 6 5 4 3 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l m z o] &nbsp [k m z o]<br>[4 6 8 10 12 14 16 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": [
      "f",
      "k",
      "r",
      "e",
      "p"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "k",
      "g",
      "h",
      "i",
      "j",
      "r",
      "l",
      "m",
      "n",
      "o",
      "e",
      "q",
      "p",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "larger_int": [
      {
        "prompt": "[s t u v] &nbsp [p t u v]<br>[f g i r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[l n e p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r l m n] &nbsp [j l m n]<br>[p t v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r l l m n o] &nbsp [r l m n o]<br>[l l n e p t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r l m n] &nbsp [r l m o]<br>[b d k h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n o e q] &nbsp [n o e p]<br>[j l n e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[d k h j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h h i j r l] &nbsp [h i j r l]<br>[a c f g g i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m n o e] &nbsp [m n o q]<br>[g i r m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o e q p] &nbsp [o e q s]<br>[c f g i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[a b c d] &nbsp [a b c f]<br>[j r l m n o e q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k g i h j] &nbsp [k g h i j]<br>[l t n o e q p s m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p s t t u] &nbsp [q p s t u]<br>[b c d f k g h h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p s t t u v] &nbsp [p s t u v]<br>[g h i j r l m n n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j l r m n] &nbsp [j r l m n]<br>[a b g d f k c h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d f k g] &nbsp [d f k h]<br>[a b c d f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r m l n o] &nbsp [r l m n o]<br>[j r o m n l e q p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d f k g h h] &nbsp [d f k g h]<br>[c d d f k g h i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o e q p] &nbsp [o e q s]<br>[a b c d f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q t s p u] &nbsp [q p s t u]<br>[l m n s e q p o t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[p u t s v] &nbsp [p s t u v]<br>[d d k k f f g g h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d d f k g] &nbsp [c d f k g]<br>[l l l l m m n n o o e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l e n o m] &nbsp [l m n o e]<br>[p p s s v v u u t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u v y x w] &nbsp [u v w x y]<br>[f f k k h h g g i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[m m n n o o e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n o e q] &nbsp [n o e p]<br>[a a b b c c d d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[h h i i j j r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[g g h h i i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o n m e q] &nbsp [m n o e q]<br>[e e q q t t s s p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p t s u v] &nbsp [p s t u v]<br>[m m r r l l j j n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[g h i j] &nbsp [g h i j r]<br>[r x l x m x n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o e q p s s] &nbsp [o e q p s]<br>[i x j x r x l x m x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a q p s t] &nbsp [e q p s t]<br>[u x v x w x x x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[j x r x l x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d f k] &nbsp [c d f k g]<br>[f x k x g x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p s s t u v] &nbsp [p s t u v]<br>[a x b x c x c x d x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g h i j r r] &nbsp [g h i j r]<br>[k x g x h x h x i x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p s t u] &nbsp [p s t u v]<br>[b x c x d x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y j r l m] &nbsp [i j r l m]<br>[l x v x n x o x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l m n o] &nbsp [l m n e]<br>[e x q x p x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[20 21 22 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k j h i g] &nbsp [k g h i j]<br>[22 24 23 25 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m o n e] &nbsp [l m n o e]<br>[23 20 21 22 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[1 2 3 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f k g h h i] &nbsp [f k g h i]<br>[13 14 15 15 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[19 20 21 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o e] &nbsp [l n o e]<br>[7 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m n o] &nbsp [l m n e]<br>[16 17 18 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q p s t] &nbsp [q p s u]<br>[1 2 3 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[q p s t] &nbsp [q p s t u]<br>[f d c b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o o e q p s] &nbsp [o e q p s]<br>[z y x w v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r l m n] &nbsp [r l m o]<br>[m l r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[m l r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k c d f b] &nbsp [b c d f k]<br>[p n e o q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e q p s] &nbsp [o q p s]<br>[m l r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n o e q] &nbsp [n o e p]<br>[i h g k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l d f k g] &nbsp [c d f k g]<br>[z l x w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i l r j] &nbsp [h i j r l]<br>[j r i h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[w v u t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[22 22 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d f k] &nbsp [b d f k]<br>[k k h h j j l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[11 11 12 12 13 13 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m n q e] &nbsp [l m n o e]<br>[e h k d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e q p s t t] &nbsp [e q p s t]<br>[10 9 8 7 7 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l n m o] &nbsp [r l m n o]<br>[z y x t v u w s p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j r l m] &nbsp [j r l n]<br>[15 15 16 16 17 17 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c d f] &nbsp [b c d k]<br>[k k g g h h i i j j r r l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[x v t p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d d f k] &nbsp [b c d f k]<br>[15 15 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[p s t t u v] &nbsp [p s t u v]<br>[a a b b c c d d f f k k k k g g h h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k g h i] &nbsp [k g h j]<br>[15 17 19 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g t u v w] &nbsp [s t u v w]<br>[d d q q k k g g h h i i j j r r l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i l r j m] &nbsp [i j r l m]<br>[y y s s u u w w q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j r l m] &nbsp [j r l n]<br>[v t p e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[e e x x q q x x p p x x s s x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[e x o x n x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[k x h x j x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n o e q] &nbsp [n o e q p]<br>[6 8 10 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h r j i l] &nbsp [h i j r l]<br>[q x e x o x m x n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[m n o e] &nbsp [l n o e]<br>[j j i i h h g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t u v w w] &nbsp [s t u v w]<br>[e e q q p p s s s s t t u u v v w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p s t] &nbsp [q p s t u]<br>[2 4 6 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a t c d f] &nbsp [a b c d f]<br>[p q e o n m t r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p s t u] &nbsp [p s t u v]<br>[i i j j r r l l m m n n o o e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d f k g] &nbsp [d f k h]<br>[o x e x q x p x s x t x u x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[2 3 4 5 6 7 8 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[17 17 18 18 19 19 20 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d f] &nbsp [b c d k]<br>[m r i g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[f x g x i x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[q p z t u] &nbsp [q p s t u]<br>[j l n c p t v x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j j r l m n] &nbsp [j r l m n]<br>[m m x x n n x x o o x x e e x x e e x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p s t] &nbsp [e p s t]<br>[14 15 16 17 18 19 20 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[k h j l n e p t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e w p s t] &nbsp [e q p s t]<br>[1 3 19 7 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l m n n o] &nbsp [r l m n o]<br>[i r m m o q s u w y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f k i h g] &nbsp [f k g h i]<br>[8 0 5 0 6 0 7 0 4 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j n l m r] &nbsp [j r l m n]<br>[i r m g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a b c d] &nbsp [a b c f]<br>[k k x x g g x x h h x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[c c f f g g i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[d f k k g h] &nbsp [d f k g h]<br>[17 17 18 18 19 19 19 19 20 20 21 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d f f k g h] &nbsp [d f k g h]<br>[s s p p q q q q e e o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w w x y] &nbsp [u v w x y]<br>[2 0 3 0 4 0 4 0 5 0 6 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[6 8 10 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[r r j j i i h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[14 0 15 0 16 0 17 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p s t u] &nbsp [p s t u v]<br>[m r i g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f h g k i] &nbsp [f k g h i]<br>[5 7 6 8 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r h i j g] &nbsp [g h i j r]<br>[17 19 18 20 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d f f k g h] &nbsp [d f k g h]<br>[e e x x q q x x p p x x s s x x s s x x t t x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[f k g h] &nbsp [f k g i]<br>[s x p x q x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[13 14 15 16 17 18 19 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m n o] &nbsp [l m n e]<br>[p p t t v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j r l n m] &nbsp [j r l m n]<br>[b x a x c x d x f x k x g x h x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c c d f k] &nbsp [b c d f k]<br>[13 12 12 11 10 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[y x w v u t s p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d f k g] &nbsp [d f k h]<br>[1 2 3 4 5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d f k g] &nbsp [d f k g h]<br>[n l j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[p p t t v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o e q] &nbsp [n o e p]<br>[r m o q s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[22 21 20 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f k g h i i] &nbsp [f k g h i]<br>[b b c c d d f f k k g g g g h h i i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[e x q x p x s x t x u x v x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[u x t x s x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m n o e] &nbsp [m n o q]<br>[l x n x e x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j r l] &nbsp [h j r l]<br>[v v u u t t s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[e n l j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i i j r l m] &nbsp [i j r l m]<br>[k k g g h h i i j j r r l l m m m m n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[p q e o n m l r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p s u t v] &nbsp [p s t u v]<br>[21 0 20 0 19 0 22 0 23 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[j r l m t] &nbsp [j r l m n]<br>[e x n x t x j x h x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[l x r x j x i x h x g x k x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v g x y] &nbsp [u v w x y]<br>[r r m m o o q q s s t t w w y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k g h i] &nbsp [f g h i]<br>[8 8 9 9 10 10 11 11 12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[13 13 15 15 17 17 19 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e q p s t t] &nbsp [e q p s t]<br>[y y w w w w u u s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o e] &nbsp [l n o e]<br>[19 0 20 0 21 0 22 0 23 0 24 0 25 0 26 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b c d] &nbsp [a b c f]<br>[8 8 10 10 12 12 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[q q x x s s x x u u x x w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e q p s] &nbsp [o q p s]<br>[23 21 19 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[p s t u j] &nbsp [p s t u v]<br>[p p e e n n u u j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[25 23 21 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o e q p] &nbsp [o e q s]<br>[26 24 22 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e q p s] &nbsp [o q p s]<br>[j x i x h x g x k x f x d x c x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f k g h] &nbsp [d k g h]<br>[v x t x p x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v t u s w] &nbsp [s t u v w]<br>[18 18 20 20 24 24 22 22 26 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[12 12 11 11 10 10 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j r l] &nbsp [h j r l]<br>[e e x x o o x x n n x x m m x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[19 0 18 0 17 0 16 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[l i n o e] &nbsp [l m n o e]<br>[17 0 7 0 9 0 11 0 13 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c h i j r] &nbsp [g h i j r]<br>[7 7 6 6 5 5 12 12 3 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d f] &nbsp [b c d k]<br>[a x c x f x g x i x r x m x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o e p q s] &nbsp [o e q p s]<br>[q x o x e x n x m x l x r x j x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[15 13 11 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[u s q o m r i g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j r l m] &nbsp [j r l n]<br>[l x r x j x i x h x g x k x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[18 18 19 19 20 20 21 21 22 22 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j r l] &nbsp [h j r l]<br>[9 8 7 6 5 4 3 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p s t t u v] &nbsp [p s t u v]<br>[5 5 6 6 6 6 7 7 8 8 9 9 10 10 11 11 12 12 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[l l x x m m x x n n x x o o x x e e x x q q x x p p x x s s x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d f k] &nbsp [c d f g]<br>[r r m m o o q q s s u u w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k g h i i j] &nbsp [k g h i j]<br>[p x q x e x o x n x m x l x r x j x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h i i j r l] &nbsp [h i j r l]<br>[17 17 16 16 16 16 15 15 14 14 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[l l x x m m x x n n x x o o x x e e x x q q x x p p x x s s x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j r l d] &nbsp [i j r l m]<br>[j j t t s s p p q q e e o o n n m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r l n m o] &nbsp [r l m n o]<br>[k k h h j j l l n n e e p p v v t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[18 16 14 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h f k g d] &nbsp [d f k g h]<br>[5 5 6 6 10 10 8 8 9 9 7 7 11 11 12 12 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o e q] &nbsp [m o e q]<br>[r r x x m m x x o o x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[n o o e q p] &nbsp [n o e q p]<br>[v t p e n l j j h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[j x i x h x g x k x f x d x c x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[18 18 17 17 16 16 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e q p s t t] &nbsp [e q p s t]<br>[14 0 15 0 16 0 17 0 18 0 19 0 20 0 21 0 22 0 22 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i b r l m] &nbsp [i j r l m]<br>[l l x x n n x x e e x x j j x x t t x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[11 13 15 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e e q p s t] &nbsp [e q p s t]<br>[i i h h g g k k k k f f d d c c b b a a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o e q] &nbsp [m o e q]<br>[18 18 20 20 22 22 24 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[p p x x q q x x e e x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d f] &nbsp [b c d k]<br>[18 18 17 17 16 16 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[f k g h] &nbsp [d k g h]<br>[19 19 0 0 20 20 0 0 21 21 0 0 22 22 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n f e q p] &nbsp [n o e q p]<br>[7 9 11 13 2 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s t u b w] &nbsp [s t u v w]<br>[m m v v u u t t s s p p q q e e o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h m n o e] &nbsp [l m n o e]<br>[3 5 7 6 11 13 15 17 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b d c f] &nbsp [a b c d f]<br>[10 12 14 16 18 26 22 24 20] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d f] &nbsp [a c d f]<br>[11 11 12 12 13 13 14 14 15 15 16 16 17 17 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p o e q n] &nbsp [n o e q p]<br>[18 18 21 21 20 20 19 19 22 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o e] &nbsp [m n o q]<br>[f f x x k k x x g g x x h h x x i i x x j j x x r r x x l l x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d x k g h] &nbsp [d f k g h]<br>[j x l x n x e x p x t x v x x x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s p t u v] &nbsp [p s t u v]<br>[18 8 10 12 14 16 6 20 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[a b c d] &nbsp [a b c f]<br>[j j l l n n e e p p t t v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p s t u] &nbsp [q s t u]<br>[6 0 5 0 4 0 3 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p s t v u] &nbsp [p s t u v]<br>[8 8 10 10 9 9 11 11 7 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f h g k i] &nbsp [f k g h i]<br>[l x h x j x k x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m m n o e q] &nbsp [m n o e q]<br>[12 11 10 9 9 8 7 6 5 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k g h i] &nbsp [k g h j]<br>[3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g g h i j r] &nbsp [g h i j r]<br>[k k x x g g x x h h x x i i x x i i x x j j x x r r x x l l x x m m x x n n x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r l m n] &nbsp [r l m n o]<br>[f f x x g g x x i i x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[d d k k h h j j l l n n e e p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p s t u] &nbsp [p s t v]<br>[r r i i g g f f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": [
      "k",
      "z",
      "y",
      "v",
      "i"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "k",
      "j",
      "z",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "y",
      "w",
      "x",
      "v",
      "i"
    ],
    "larger_int": [
      {
        "prompt": "[m m n o p q] &nbsp [m n o p q]<br>[r r t y x i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[r t y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g g h k] &nbsp [e f g h k]<br>[q s u w w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z l m n g] &nbsp [z l m n o]<br>[g k d m o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f g h h k] &nbsp [e f g h k]<br>[n n p r t y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h k]<br>[z m o q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u y w x] &nbsp [u y w x v]<br>[e g k z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[y w x i v] &nbsp [y w x v i]<br>[q s w u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h k j z] &nbsp [h k j l]<br>[g k z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v z] &nbsp [y w x v i]<br>[a c e g l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[r s t u y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h k j] &nbsp [g h k z]<br>[n o p q r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x b i] &nbsp [y w x v i]<br>[m n o p q r s l u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[k j z l m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[l m n o p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o l m n z] &nbsp [z l m n o]<br>[h k j z m l n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n o p q] &nbsp [n o p q r]<br>[r s t u y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[r s t u y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l l m n o p] &nbsp [l m n o p]<br>[r r s t u y w x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[g h k j z l m n o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[b l m n o] &nbsp [z l m n o]<br>[m m n n o o p p j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q r s t] &nbsp [p r s t]<br>[w w x x v v i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u y w x] &nbsp [t y w x]<br>[j j z z l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u y] &nbsp [s t u y w]<br>[y y w w x x v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[y y w w x x v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u y] &nbsp [s t u w]<br>[g g h h k k j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y w v x i] &nbsp [y w x v i]<br>[d d c c b b e e f f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[z l l m n o] &nbsp [z l m n o]<br>[t t u u u u y y w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[r r s s t t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[s s t t u u y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[h x k x j x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[t x u x y x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w d v i] &nbsp [y w x v i]<br>[q x r x m x t x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h k] &nbsp [f g h j]<br>[u x y x w x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w w x v i] &nbsp [y w x v i]<br>[n x o x p x q x q x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[u x y x w x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g h k j] &nbsp [g h k j z]<br>[o x p x q x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u y] &nbsp [s t u y w]<br>[h x k x j x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y y w x v i] &nbsp [y w x v i]<br>[l x m x n x n x o x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[t x u x y x w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[10 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h z j k l] &nbsp [h k j z l]<br>[11 12 14 13 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[6 7 8 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[22 23 24 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k j z l] &nbsp [h j z l]<br>[10 11 12 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g h k] &nbsp [e g h k]<br>[19 20 21 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o p h r s] &nbsp [o p q r s]<br>[9 23 24 25 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r u t s y] &nbsp [r s t u y]<br>[10 7 8 9 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[z l m n] &nbsp [z l m n o]<br>[1 2 3 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g z k j h] &nbsp [g h k j z]<br>[25 23 24 22 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[c d d e f g] &nbsp [c d e f g]<br>[z j k k h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u] &nbsp [r s t y]<br>[i v x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s t u y] &nbsp [s t u y w]<br>[j k h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[j k h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z l m n] &nbsp [z l m n o]<br>[g f e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[i v x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y w w x v i] &nbsp [y w x v i]<br>[f e d c b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o p] &nbsp [l n o p]<br>[x w y u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g h j k] &nbsp [f g h k j]<br>[k z j l h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d d e f g h] &nbsp [d e f g h]<br>[z j j k h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[l l m m n n o o p p q q r r s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [z m n o]<br>[23 23 24 24 25 25 26 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[n l j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m e o p] &nbsp [l m n o p]<br>[g g k k s s m m o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z l m n] &nbsp [z l m o]<br>[22 0 23 0 24 0 25 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e v] &nbsp [b c d e f]<br>[10 10 11 11 12 12 15 15 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y w w x v i] &nbsp [y w x v i]<br>[18 17 17 16 15 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[k z m o q s u w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y w x v k] &nbsp [y w x v i]<br>[a c e g k y m o q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[q x p x o x n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[e f g h] &nbsp [e f g k]<br>[n n m m l l z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u u y] &nbsp [r s t u y]<br>[z z z z m m o o q q s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f f g h k] &nbsp [e f g h k]<br>[h j l n p r t y y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[18 20 22 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[d d f f h h j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k j j z l m] &nbsp [k j z l m]<br>[r r t t y y x x x x i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e k g h f] &nbsp [e f g h k]<br>[i x y r t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[26 25 24 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[b x c x d x e x f x g x h x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[16 18 20 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[g h k z j] &nbsp [g h k j z]<br>[w x s x u x q x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[e x d x c x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x v p] &nbsp [y w x v i]<br>[h x a x l x n x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[t x s x r x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w v x i] &nbsp [y w x v i]<br>[5 1 3 2 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u y] &nbsp [r t u y]<br>[m x l x z x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j z l m] &nbsp [j z l n]<br>[r r s s t t u u y y w w x x v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[b d f f h j l n p r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h k k j z l] &nbsp [h k j z l]<br>[22 0 23 0 24 0 25 0 25 0 26 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h k b z] &nbsp [g h k j z]<br>[u u x x y y x x w w x x x x x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[e f g h] &nbsp [e f g k]<br>[25 24 23 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h k] &nbsp [f g h j]<br>[22 0 23 0 24 0 25 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[8 9 10 11 12 13 14 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[k k z z m m o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[21 20 19 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e f g g h] &nbsp [d e f g h]<br>[26 25 24 24 23 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h e j z l] &nbsp [h k j z l]<br>[v w i s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o p q] &nbsp [m o p q]<br>[r r t t y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[k x h x g x f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[o o p p q q r r s s t t u u y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[g h k j] &nbsp [g h k z]<br>[q q p p o o n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[r r s s t t u u u u y y w w x x v v i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u y w j] &nbsp [t u y w x]<br>[z j h f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a l m n o] &nbsp [z l m n o]<br>[b b x x w w x x x x x x v v x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[n m l z j k h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[h j l n p r t y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z b c d e] &nbsp [a b c d e]<br>[p p s s u u w w v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s p q r o] &nbsp [o p q r s]<br>[v w s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k h z l] &nbsp [h k j z l]<br>[a a b b c c d d e e k k g g h h f f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[z k j h l] &nbsp [h k j z l]<br>[q q s s w w u u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[l z j m n] &nbsp [j z l m n]<br>[18 21 20 19 22 23 24 25 26] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w w x v i] &nbsp [y w x v i]<br>[n x p x r x t x t x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u y w x x v] &nbsp [u y w x v]<br>[i x v x v x x x w x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[z x m x o x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d e f g] &nbsp [c e f g]<br>[s x u x w x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u y w] &nbsp [s u y w]<br>[e x g x k x z x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[i i v v x x w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h k o z] &nbsp [g h k j z]<br>[n m l z x k h g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u y] &nbsp [s t u y w]<br>[x w y u t s r q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[r x s x t x u x y x w x x x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[u y w x] &nbsp [t y w x]<br>[t x y x x x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h k] &nbsp [f g h k j]<br>[x x w w y y u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j z l m] &nbsp [j z l n]<br>[e e f f g g h h k k j j z z l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h k j l z] &nbsp [h k j z l]<br>[z m o u s q w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[3 4 5 6 7 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[m m x x n n x x o o x x p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[h x k x j x z x l x m x n x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u y] &nbsp [s t u y w]<br>[2 0 3 0 4 0 5 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u y w] &nbsp [s u y w]<br>[k k j j z z l l m m n n o o p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b a c d e] &nbsp [a b c d e]<br>[z x k x g x m x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[h k j z] &nbsp [h k j l]<br>[i i x x y y t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h k j] &nbsp [f h k j]<br>[z x m x o x q x s x u x w x v x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h k]<br>[j x l x n x p x r x t x y x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r j t u] &nbsp [q r s t u]<br>[7 7 20 20 9 9 10 10 11 11 12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g f e h k] &nbsp [e f g h k]<br>[15 0 16 0 14 0 13 0 12 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[w h k j z] &nbsp [g h k j z]<br>[2 4 6 8 26 12 14 16 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g g h k j] &nbsp [f g h k j]<br>[13 0 15 0 15 0 17 0 19 0 21 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f g g h k] &nbsp [e f g h k]<br>[q q o o o o m m z z k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[i x x x y x t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k j z l] &nbsp [h j z l]<br>[25 24 23 22 21 20 19 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[q r s t] &nbsp [p r s t]<br>[15 14 13 12 11 10 9 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h k j] &nbsp [g h k z]<br>[h h j j l l n n p p r r t t y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x v] &nbsp [u w x v]<br>[11 0 10 0 9 0 8 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u y w x] &nbsp [u y w x v]<br>[10 0 9 0 8 0 7 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z l v n o] &nbsp [z l m n o]<br>[u u x x k k x x j j x x z z x x l l x x m m x x n n x x o o x x p p x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[h h x x g g x x f f x x e e x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o n m p q] &nbsp [m n o p q]<br>[w w v v x x i i y y u u t t s s r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t] &nbsp [p r s t]<br>[s s x x t t x x u u x x y y x x w w x x x x x x v v x x i i x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u y]<br>[15 15 14 14 13 13 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u y y w x] &nbsp [t u y w x]<br>[23 22 21 21 20 19 18 17 16 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[u s q o m z k g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[14 0 16 0 18 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t u] &nbsp [r s t y]<br>[4 0 5 0 6 0 7 0 8 0 9 0 10 0 11 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[18 18 0 0 19 19 0 0 20 20 0 0 21 21 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d e] &nbsp [a c d e]<br>[u u x x w w x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[z l m n] &nbsp [z l m o]<br>[j j l l n n p p r r t t y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s y u t w] &nbsp [s t u y w]<br>[y y x x u u x x s s x x t t x x r r x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v y w x u] &nbsp [u y w x v]<br>[10 11 12 9 8 7 6 5 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t d y w x] &nbsp [t u y w x]<br>[o o x x e e x x g g x x k k x x z z x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h k j z] &nbsp [h k j l]<br>[5 0 6 0 7 0 8 0 9 0 10 0 11 0 12 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[r f g h k] &nbsp [e f g h k]<br>[26 25 17 23 22 21 20 19 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[l l z z j j k k h h g g f f e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u w x v i] &nbsp [y w x v i]<br>[k k h h g g f f e e d d c c b b t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z l m n t] &nbsp [z l m n o]<br>[q o m z v g e c a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u y w x] &nbsp [u y w x v]<br>[1 0 3 0 5 0 7 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y x w v i] &nbsp [y w x v i]<br>[22 0 21 0 18 0 19 0 20 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[t t t t r r p p n n l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[k k z z m m o o q q s s u u w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t u] &nbsp [r s t y]<br>[h h x x j j x x l l x x n n x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j z l m g] &nbsp [j z l m n]<br>[g g x x h h x x w w x x j j x x z z x x l l x x m m x x n n x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[h k j z l l] &nbsp [h k j z l]<br>[i i x x i i x x v v x x x x x x w w x x y y x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o n m p q] &nbsp [m n o p q]<br>[k k x x e e x x g g x x c c x x z z x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[c c x x e e x x g g x x k k x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g j k h] &nbsp [f g h k j]<br>[l l x x h h x x k k x x j j x x z z x x g g x x m m x x n n x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u y w x] &nbsp [t y w x]<br>[u u s s q q o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[i i x x v v x x x x x x w w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[19 18 17 16 15 14 13 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d g f e h] &nbsp [d e f g h]<br>[k k z z m m o o q q s s u u v v w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m n o] &nbsp [z m n o]<br>[7 9 11 13 15 17 19 21] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h k j] &nbsp [g h k z]<br>[3 3 5 5 7 7 9 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[r r x x s s x x t t x x u u x x y y x x w w x x x x x x v v x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t y u] &nbsp [r s t u y]<br>[14 12 8 10 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t k j z l] &nbsp [h k j z l]<br>[16 16 15 15 3 3 13 13 12 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d e] &nbsp [a c d e]<br>[20 18 16 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u y c x v] &nbsp [u y w x v]<br>[24 12 11 10 9 8 7 6 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[z l m n] &nbsp [z l m o]<br>[v w u s q o m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j z l m] &nbsp [j z l m n]<br>[v w u s q o m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m p o n q] &nbsp [m n o p q]<br>[i i r r x x w w y y u u t t s s v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k z j l m] &nbsp [k j z l m]<br>[i i v v x x w w r r u u t t s s y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[i i v v x x w w y y u u t t s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[p p x x o o x x n n x x m m x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[18 18 19 19 20 20 21 21 22 22 23 23 24 24 25 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[i x v x x x w x y x u x t x s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[k k z z m m o o q q s s u u w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t u y w] &nbsp [t u y w x]<br>[r r x x q q x x p p x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h k j] &nbsp [g h k z]<br>[i i x x y y t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l d n o p] &nbsp [l m n o p]<br>[i x v x x x w x y x u x t x l x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[n n x x p p x x r r x x t t x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[15 13 11 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[10 12 14 16 18 20 22 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": [
      "n",
      "r",
      "a",
      "k",
      "o"
    ],
    "shuffled_alphabet": [
      "n",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "r",
      "l",
      "m",
      "a",
      "k",
      "p",
      "q",
      "o",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "larger_int": [
      {
        "prompt": "[l m a k] &nbsp [l m a p]<br>[a p o t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h j i r l] &nbsp [h i j r l]<br>[r g i e m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[h j l a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a m k p q] &nbsp [m a k p q]<br>[n i e g c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q o s] &nbsp [k q o s]<br>[a p o t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[m k q s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m a k p] &nbsp [l a k p]<br>[e g i r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[l a p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m a k p] &nbsp [m a k q]<br>[i r m k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[b d f h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "longer_targ": [
      {
        "prompt": "[r l l m a k] &nbsp [r l m a k]<br>[c d e f g h h i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[n b c d e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[a k p q o s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h i j r] &nbsp [g i j r]<br>[p q o s t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[l m a k p q o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[j r l m a k p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a k u q o] &nbsp [a k p q o]<br>[d e f g h i o r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s g u v w] &nbsp [s t u v w]<br>[m a k p b o s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q o s t] &nbsp [p o s t]<br>[f g h i j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m a k p] &nbsp [l a k p]<br>[a k p q o s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "group": [
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[h h i i j j r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j r r] &nbsp [g h i j r]<br>[n n b b c c c c d d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j r]<br>[r r l l m m a a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[j j r r l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s s t u v w] &nbsp [s t u v w]<br>[a a k k k k p p q q o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m q k p] &nbsp [l m a k p]<br>[f f l l h h i i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i d r l] &nbsp [h i j r l]<br>[g g h h i i t t r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q o s t] &nbsp [q o s u]<br>[j j r r l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j r l m] &nbsp [j r l m a]<br>[q q o o s s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j r]<br>[k k p p q q o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "interleaved": [
      {
        "prompt": "[n b c y e] &nbsp [n b c d e]<br>[i x j x r x a x m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k p s o q] &nbsp [k p q o s]<br>[n x c x b x d x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q q o s t u] &nbsp [q o s t u]<br>[n x b x c x c x d x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o s t u] &nbsp [q s t u]<br>[f x g x h x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q s o t] &nbsp [p q o s t]<br>[v x s x t x u x o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j r e m] &nbsp [i j r l m]<br>[n x z x c x d x e x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[m x a x k x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[o x s x t x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a a k p q o] &nbsp [a k p q o]<br>[r x l x l x m x a x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n b c d] &nbsp [n b c d e]<br>[d x e x f x g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "letter2num": [
      {
        "prompt": "[q o s t] &nbsp [q o s t u]<br>[7 8 9 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h k p q o] &nbsp [a k p q o]<br>[12 13 24 15 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i m r] &nbsp [g h i j r]<br>[13 14 6 16 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m a k] &nbsp [l m a k p]<br>[9 10 11 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k p q o] &nbsp [a p q o]<br>[3 4 5 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m a k] &nbsp [l m a p]<br>[9 10 11 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g h i t r] &nbsp [g h i j r]<br>[15 16 20 18 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l m a k] &nbsp [r m a k]<br>[8 9 10 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[1 2 3 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l q o s t] &nbsp [p q o s t]<br>[14 15 16 17 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "reverse": [
      {
        "prompt": "[j r l m] &nbsp [j r l a]<br>[e d c b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p q o o s t] &nbsp [p q o s t]<br>[e d c b b n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j r]<br>[v u t s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r l m a] &nbsp [r l m a k]<br>[t s o q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r l m z k] &nbsp [r l m a k]<br>[e d w b n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l r m a k] &nbsp [r l m a k]<br>[u v t s o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r p q o s] &nbsp [k p q o s]<br>[r j i h d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r j l m a] &nbsp [j r l m a]<br>[g f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a p k q o] &nbsp [a k p q o]<br>[z y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o s t u] &nbsp [o s t u v]<br>[k a m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split1": [
      {
        "prompt": "[g l i j r] &nbsp [g h i j r]<br>[p x j x a x m x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a k e q o] &nbsp [a k p q o]<br>[l l a a p p f f t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m a s p] &nbsp [l m a k p]<br>[r i g e h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m m a k p] &nbsp [l m a k p]<br>[2 0 2 0 3 0 4 0 5 0 6 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i i j r l m] &nbsp [i j r l m]<br>[b x c x d x e x f x f x g x h x i x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l m a k k] &nbsp [r l m a k]<br>[e e g g g g i i r r m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r l m a k k] &nbsp [r l m a k]<br>[f f e e d d c c b b b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[11 11 12 12 13 13 14 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[l l m m a a k k p p q q o o s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split2": [
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[15 15 16 16 17 17 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n b c d e e] &nbsp [n b c d e]<br>[i r r m k q s u w y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r l m a] &nbsp [r l m a k]<br>[1 2 3 4 5 6 7 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n n b c d e] &nbsp [n b c d e]<br>[f x f x h x j x l x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g h h i j] &nbsp [f g h i j]<br>[14 13 12 11 10 10] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[k k p p q q o o s s t t u u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[5 7 9 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n d c b e] &nbsp [n b c d e]<br>[z y x w v t u s o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a h p q o] &nbsp [a k p q o]<br>[16 3 14 13 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[e x d x c x b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split3": [
      {
        "prompt": "[q o s t] &nbsp [p o s t]<br>[k x q x s x u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k a m p q] &nbsp [m a k p q]<br>[g i u m k q s r w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[d f h j l a p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z w x y v] &nbsp [v w x y z]<br>[1 2 3 4 5 7 6 8 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[1 3 5 7] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[c x d x e x f x g x h x i x j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n b b c d e] &nbsp [n b c d e]<br>[13 13 13 13 14 14 15 15 16 16 17 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[l l x x m m x x a a x x k k x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k p q o] &nbsp [k p q s]<br>[e e d d c c b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n b c d] &nbsp [n b c d e]<br>[l l x x m m x x a a x x k k x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split4": [
      {
        "prompt": "[a k p q] &nbsp [m k p q]<br>[h x i x j x r x l x m x a x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[14 13 12 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[18 17 16 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m a k p] &nbsp [m a k q]<br>[g x h x i x j x r x l x m x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[u s q k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[f f g g h h i i j j r r l l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[f f h h j j l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a a k p q o] &nbsp [a k p q o]<br>[11 12 13 14 15 15 16 17 18 19] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[16 15 14 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m a a k p q] &nbsp [m a k p q]<br>[10 9 9 8 7 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split5": [
      {
        "prompt": "[j r l m] &nbsp [j r l a]<br>[11 0 12 0 13 0 14 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k p q o o s] &nbsp [k p q o s]<br>[t s o q p p k a m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[20 19 18 17] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n p q o] &nbsp [a k p q o]<br>[w v u t s o n p k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u v v w x y] &nbsp [u v w x y]<br>[f h j l a p o o t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[9 10 11 12 13 14 15 16] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q p k o s] &nbsp [k p q o s]<br>[2 3 10 5 6 7 8 9 4] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j r l e a] &nbsp [j r l m a]<br>[r i t e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n b c d] &nbsp [n b c d e]<br>[d d e e f f g g h h i i j j r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [m k p q]<br>[3 5 7 9] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gen_split6": [
      {
        "prompt": "[l m a k] &nbsp [l m a p]<br>[c c d d e e f f g g h h i i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[e x g x i x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j m a k p] &nbsp [l m a k p]<br>[q x o x s x t x z x v x w x x x y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[16 17 18 19 20 21 22 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[k k x x p p x x q q x x o o x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m k a p] &nbsp [l m a k p]<br>[q p k a m r l j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[l j h f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j j r l m] &nbsp [i j r l m]<br>[o q p k a m l l r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[8 9 10 11 12 13 14 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[26 25 24 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "2gensplit7": [
      {
        "prompt": "[q o s t] &nbsp [q o s u]<br>[4 5 6 7 8 9 10 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q o s t] &nbsp [q o s t u]<br>[j x r x l x m x a x k x p x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l r j m a] &nbsp [j r l m a]<br>[i x j x r x a x m x l x k x p x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[l l a a p p o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g g h i j] &nbsp [f g h i j]<br>[a a k k p p p p q q o o s s t t u u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m m a k p] &nbsp [l m a k p]<br>[t x t x s x o x q x p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g a k p q] &nbsp [m a k p q]<br>[9 13 7 6 5] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[s q k m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[17 16 15 14] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[1 0 2 0 3 0 4 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split1": [
      {
        "prompt": "[l m a k] &nbsp [r m a k]<br>[20 19 18 17 16 15 14 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j n] &nbsp [g h i j r]<br>[r x x x w x v x u x t x s x o x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c d e j g] &nbsp [c d e f g]<br>[14 0 13 0 25 0 11 0 10 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q o c t u] &nbsp [q o s t u]<br>[r r s s g g e e c c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[17 17 19 19 21 21 23 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[16 16 15 15 14 14 13 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[j x h x f x d x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l m a k k p] &nbsp [l m a k p]<br>[3 3 0 0 4 4 0 0 5 5 0 0 5 5 0 0 6 6 0 0 7 7 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q o s b u] &nbsp [q o s t u]<br>[o o x x q q x x m m x x k k x x a a x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m a k p] &nbsp [l a k p]<br>[a a m m l l r r j j i i h h g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split2": [
      {
        "prompt": "[o s t g v] &nbsp [o s t u v]<br>[15 15 0 0 16 16 0 0 17 17 0 0 6 6 0 0 19 19 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[u u s s q q k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[s q k m r i g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[k x m x r x i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q o s s t] &nbsp [p q o s t]<br>[3 3 5 5 7 7 9 9 9 9 11 11] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j r r l] &nbsp [h i j r l]<br>[u u x x t t x x s s x x s s x x o o x x q q x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[8 0 9 0 10 0 11 0 12 0 13 0 14 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n s c d e] &nbsp [n b c d e]<br>[p p x x q q x x o o x x s s x x t t x x l l x x v v x x w w x x x x x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s b c d e] &nbsp [n b c d e]<br>[7 0 2 0 11 0 13 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[x u v w t] &nbsp [t u v w x]<br>[9 8 7 6 5 4 2 3 1] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split3": [
      {
        "prompt": "[a k p y o] &nbsp [a k p q o]<br>[p p k k o o m m l l r r j j i i h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[9 11 13 15 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[i x g x e x c x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k p q o] &nbsp [k p q s]<br>[i i x x h h x x g g x x f f x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d e e f g] &nbsp [c d e f g]<br>[2 4 6 8 10 10 12 14 16 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b d c e f] &nbsp [b c d e f]<br>[19 0 18 0 17 0 15 0 16 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w i y z] &nbsp [v w x y z]<br>[19 0 21 0 17 0 16 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q o s t] &nbsp [p o s t]<br>[7 0 6 0 5 0 4 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[x x w x v x u x t x s x o x q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f j h i g] &nbsp [f g h i j]<br>[r r m m k k q q s s w w u u y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split4": [
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[12 12 14 14 16 16 18 18] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o s t u] &nbsp [o s t v]<br>[19 17 15 13] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[21 21 0 0 22 22 0 0 23 23 0 0 24 24 0 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q o s t] &nbsp [p o s t]<br>[7 5 3 1] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[14 0 15 0 16 0 17 0 18 0 19 0 20 0 21 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r l m a] &nbsp [j l m a]<br>[o o x x q q x x p p x x k k x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[19 18 17 16 15 14 13 12] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a k p p q o] &nbsp [a k p q o]<br>[9 8 7 6 5 5 4 3 2 1] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[b b d d f f h h j j l l a a p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f g g] &nbsp [c d e f g]<br>[z z x v t o p a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split5": [
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[m m r r i i g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h h i j r] &nbsp [g h i j r]<br>[i i i i r r m m k k q q s s u u w w y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i o r l m] &nbsp [i j r l m]<br>[t x s x o x q x p x k x a x c x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k y q o s] &nbsp [k p q o s]<br>[y w u s q k m j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s x u v w] &nbsp [s t u v w]<br>[t o p a l j i f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o s t u] &nbsp [q s t u]<br>[9 0 11 0 13 0 15 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[u x s x q x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n b c d e e] &nbsp [n b c d e]<br>[o o x x o o x x q q x x p p x x k k x x a a x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k p s o q] &nbsp [k p q o s]<br>[8 10 12 22 16 18 20 14 24] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o s t u] &nbsp [o s t v]<br>[p p k k a a m m l l r r j j i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gen_split6": [
      {
        "prompt": "[k p q o] &nbsp [k p q s]<br>[8 10 12 14 16 18 20 22] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j r l m] &nbsp [j r l a]<br>[u x s x q x k x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m k a p q] &nbsp [m a k p q]<br>[b b x x e e x x d d x x c c x x f f x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o s t u] &nbsp [q s t u]<br>[9 7 5 3] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[o x p x a x l x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m a k p] &nbsp [m a k q]<br>[11 13 15 17 19 21 23] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[c c e e g g i i r r m m k k q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j r r l m a] &nbsp [j r l m a]<br>[o o x x t t x x v v x x x x x x z z x x z z x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[9 8 7 6 5 4 3 2] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x y d] &nbsp [v w x y z]<br>[5 0 17 0 3 0 2 0 1 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "3gensplit7": [
      {
        "prompt": "[d e b g h] &nbsp [d e f g h]<br>[9 0 10 0 11 0 12 0 13 0 1 0 15 0 16 0 17 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m a k] &nbsp [l m a p]<br>[z x x x v x t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[o x q x p x k x a x m x l x r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f f g] &nbsp [c d e f g]<br>[11 13 15 15 17 19 21 23 25] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q o s] &nbsp [p q o t]<br>[8 8 9 9 10 10 11 11 12 12 13 13 14 14 15 15] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[1 0 2 0 3 0 4 0 5 0 6 0 7 0 8 0] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w x x] &nbsp [t u v w x]<br>[14 12 12 10 8 6] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j r l] &nbsp [i j r m]<br>[11 11 10 10 9 9 8 8] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r l m a] &nbsp [r l m a k]<br>[t x o x p x a x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a s p q o] &nbsp [a k p q o]<br>[q o p a l j h f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}