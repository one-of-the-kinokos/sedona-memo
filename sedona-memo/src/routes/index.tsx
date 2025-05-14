import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex
          padding={"10px"}
          maxWidth={"1280px"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Text>セドナメソッド実践のための覚書</Text>
          <Text fontSize={"xx-small"}>
            参考図書: 新版 人生を変える一番シンプルな方法 ― セドナメソッド ― ,
            ヘイル・ドゥオスキン (著), 安藤 理 (監修), 乾 真由美 (翻訳)
          </Text>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              基本の感情解放手順
            </Text>

            <Text color={"black"}>
              感情が沸き起こっても持ち続ける必要はない。
            </Text>
            <Text color={"black"}>
              行動で発散したり、蓋をして閉じ込めたりすることはせず、感情を認識して手放すことが重要。
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. ある事柄に関する感情を思い浮かべる
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 感情を迎え入れて認める
              </Text>
              <Text color={"black"}>今思っていることに注目する。</Text>
              <Text color={"black"}>感情に抵抗しない。</Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 感情を手放せるか自問する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 手放せるまで繰り返す
              </Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              決意を書く
            </Text>

            <Text color={"black"}>
              セドナメソッドを通して改善していきたい人生の事柄をノートに書く。
            </Text>
            <Text color={"black"}>
              「できる」ことに限定せずに書き出していき、解放の目的としていく。
            </Text>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              収穫を書く
            </Text>

            <Text color={"black"}>解放によって得られた体験を記録する。</Text>
            <Text color={"black"}>自己発見やさらなる解放の助けとなる。</Text>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              注目すべき感情
            </Text>

            <Text color={"black"}>
              6つのネガティブな感情に注目しながら解放を続けて、勇気・受容・平安の状態を目指していく。
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. 無気力
              </Text>
              <Text color={"black"}>
                願望がなく、ネガティブ思考に包まれる。
              </Text>
              <Text color={"black"}>何も感じないこともある。</Text>
              <Text color={"black"}>出口がなく、心は重く沈んでいる。</Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 悲しみ
              </Text>
              <Text color={"black"}>
                苦痛の声を上げて、誰かに助けを求めている。
              </Text>
              <Text color={"black"}>
                受けた傷や損失を思い浮かべ、誰かに助けてもらえるかどうかを中心に物事を考えている。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 恐れ
              </Text>
              <Text color={"black"}>
                一歩踏み出そうとしても、大きすぎる危険を感じて踏み出せない。
              </Text>
              <Text color={"black"}>
                傷や損失を予想して、自分や周囲を守るべきだと考える。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 渇望
              </Text>
              <Text color={"black"}>不足を感じて所有を望んでいる。 </Text>
              <Text color={"black"}>金や物や人など、対象は様々。</Text>
              <Text color={"black"}>
                自分には手に入らない、あるいは手に入れるべきではないという感情が奥深くに眠っている。
              </Text>
              <Text color={"black"}>
                ポジティブな空想をしても、実際に手に入っても満たされず楽しめない。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                5. 怒り
              </Text>
              <Text color={"black"}>他者を傷つけることを考えている。 </Text>
              <Text color={"black"}>破壊的なイメージで考えが溢れている。</Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                6. 誇り
              </Text>
              <Text color={"black"}>
                現状維持を望み、他者の動きを阻害する。
              </Text>
              <Text color={"black"}>
                自分の成したことと知っていることを中心に考え、自身の偉大さを気づいてもらいたいと考えている。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                7. 勇気
              </Text>
              <Text color={"black"}>思い通りに躊躇なく行動できる。</Text>
              <Text color={"black"}>
                誇りの状態と異なって考えは整理され、前に進む意欲がある。
              </Text>
              <Text color={"black"}>
                自身や他人の前進・成長に関心を持って前に進み、確信を持って人生を楽しんでいる。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                8. 受容
              </Text>
              <Text color={"black"}>
                すべてをあるがままに手にして、楽しさや美しさを感じている。
              </Text>
              <Text color={"black"}>
                変える必要を感じておらず、満足している。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                9. 平安
              </Text>
              <Text color={"black"}>完璧を感じ頭が澄んでいる。</Text>
              <Text color={"black"}>すべてがうまくいっている。</Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              抵抗の開放
            </Text>

            <Text color={"black"}>
              人生の中で奮闘せずに、自然な流れを使うことを目指す。
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. 抵抗を感じ取る
              </Text>
              <Text color={"black"}>
                「〇〇しなければならない」・「〇〇すべき/しないべき」・「〇〇できない」という感じ方は「抵抗」と定義される。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 抵抗があることを認める
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 抵抗を手放せるか自問する
              </Text>
              <Text color={"black"}>
                あるいは抵抗し続けることを許可できるか自問する。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 自由を感じるまで繰り返す。
              </Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              「すべきこと」からの解放
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. ノートを縦に二分割する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 左に「すべきこと」をリストアップする
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 右にそれらに関して感じている感情・抵抗を書き出す
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. それぞれの項目に対して解放を行う
              </Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              「行き詰まり」からの解放
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. 行き詰まっていることを思い浮かべる
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 行き詰まりを変えたい気持ちを認識する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 行き詰まりを変えたい気持ちを手放せるか自問する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 手放せるまで繰り返す
              </Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              4つの根本的欲求
            </Text>

            <Text color={"black"}>
              人の思考や振る舞いは、制御・承認・安全・分離の欲求に基づいている。
            </Text>
            <Text color={"black"}>
              これらを解放することでセドナメソッドの効果を高めることができる。
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. 制御欲求
              </Text>
              <Text color={"black"}>
                思い通りにしたい/正しくありたいという欲求。
              </Text>
              <Text color={"black"}>押し付けがましい。</Text>
              <Text color={"black"}>
                対として制御されたい欲求があり、人任せで優柔不断な考えを持つようになる。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. 承認欲求(愛されたい欲求)
              </Text>
              <Text color={"black"}>
                自分が認められていないと感じ、他人からの見え方を過剰に意識させる欲求。
              </Text>
              <Text color={"black"}>
                対として否認欲求があり、他人からの承認を拒否するように責任を回避したり裏切ったりするようになる。
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 安全欲求
              </Text>
              <Text color={"black"}>自分が安全でいたいと思う欲求。 </Text>
              <Text color={"black"}>
                周囲を敵視して、自身が脅威にさらされているように感じる。
              </Text>
              <Text color={"black"}>
                対として死にたい欲求があり、生きることを恐れ終わらせたいと感じるようになる。{" "}
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 分離欲求
              </Text>
              <Text color={"black"}>
                自分がほかと異なって特別でありたいと思う欲求。
              </Text>
              <Text color={"black"}>
                普通であったり周囲に馴染むことを望まない。
              </Text>
              <Text color={"black"}>
                対として一体欲求があり、孤立を感じていてそれを終わらせたいと望むようになる。
              </Text>
            </Box>
          </Box>

          <Box
            width={"full"}
            margin={"5px"}
            padding={"10px"}
            rounded={"xl"}
            bgColor={"gray.200"}
          >
            <Text color={"black"} textStyle={"2xl"}>
              根本的欲求の解放
            </Text>
            <Spacer minH={"20px"} maxH={"20px"} />

            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                1. 感情を認識する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                2. その感情がどの欲求から来るものか考える
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                3. 欲求を認めて手放せるか自問する
              </Text>
            </Box>
            <Box
              borderBottomWidth={"1px"}
              borderColor={"black"}
              marginBottom={"10px"}
            >
              <Text color={"black"} fontWeight={"bold"}>
                4. 繰り返す
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
