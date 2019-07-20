import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from "react-native";
import RNKakaoLogins from "react-native-kakao-logins";

export default class LoginScreen extends React.Component {
  kakaoLogin() {
    RNKakaoLogins.login((err, result) => {
      if (err) {
        return;
      }
      Alert.alert("result", result);
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.loginContainer}>
          <View style={styles.loginHeader}>
            <TouchableOpacity
              style={styles.headerIconContainer}
              onPress={() => this.props.navigation.pop()}
            >
              <Image
                source={require("../../assets/arrow-left.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>로그인</Text>
          </View>

          <View style={styles.loginContent}>
            <View style={styles.contentSpacer} />
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>ID or Email</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType="newPassword"
                />
              </View>
            </View>
            <View style={styles.contentSpacer} />
          </View>

          <View style={styles.loginBottom}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonSpacer} />
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </TouchableOpacity>
              <View style={styles.buttonSpacer} />
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonSpacer} />
              <TouchableOpacity
                style={styles.kakaoButton}
                onPress={() => this.kakaoLogin()}
              >
                <Image
                  source={require("../../assets/kakao.png")}
                  style={styles.kakaoButtonIcon}
                />
                <Text style={styles.kakaoButtonText}>카카오로 로그인</Text>
              </TouchableOpacity>
              <View style={styles.buttonSpacer} />
            </View>

            <View style={styles.loginBottomContainer}>
              <View style={styles.loginBottomSpaer} />
              <View style={styles.loginBottomCenterContainer}>
                <TouchableOpacity style={styles.loginBottomTextFirstContainer}>
                  <Text style={styles.loginBottomText}>
                    아이디 / 비밀번호 찾기
                  </Text>
                </TouchableOpacity>

                <Text style={styles.loginBottomTextSpacer}>|</Text>

                <TouchableOpacity style={styles.loginBottomTextSecondContainer}>
                  <Text style={styles.loginBottomText}>회원가입</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginBottomSpaer} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: "column",
    height: "100%"
  },
  loginHeader: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  headerIconContainer: {
    position: "absolute",
    left: 20
  },
  headerIcon: {
    marginLeft: 15,
    width: 23,
    height: 23
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333"
  },
  loginContent: {
    minHeight: 200,
    flex: 60,
    flexDirection: "row"
  },
  contentSpacer: {
    flex: 10
  },
  contentContainer: {
    flex: 80,
    justifyContent: "center"
  },
  inputContainer: {
    marginBottom: 50
  },
  label: {
    color: "#cccccc",
    fontSize: 16,
    lineHeight: 15.5,
    letterSpacing: 0,
    textAlign: "left",
    marginBottom: 10
  },
  input: {
    color: "#333333",
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16
  },
  loginBottom: {
    minHeight: 100,
    flex: 30,
    flexDirection: "column"
  },
  loginButton: {
    flex: 50,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9a75ff",
    borderRadius: 24
  },
  loginButtonText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },
  kakaoButton: {
    flex: 50,
    height: 45,
    backgroundColor: "#ffffff",
    borderColor: "#ffe600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 1.5,
    flexDirection: "row"
  },
  kakaoButtonText: {
    fontSize: 14,
    color: "#755600",
    fontWeight: "bold"
  },
  kakaoButtonIcon: {
    marginRight: 10,
    width: 15,
    height: 15
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 18
  },
  buttonSpacer: {
    flex: 10
  },
  loginBottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  loginBottomCenterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 50
  },
  loginBottomTextFirstContainer: {
    flex: 80
  },
  loginBottomTextSpacer: {
    color: "#b3b3b3",
    fontSize: 14,
    flex: 10
  },
  loginBottomTextSecondContainer: {
    flex: 30
  },
  loginBottomText: {
    color: "#b3b3b3",
    fontSize: 14
  },
  loginBottomSpaer: {
    flex: 20
  }
});
