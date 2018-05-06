export default class Calculator {
  static sign(_number) {
    return _number < 0 ? -1 : _number > 0 ? 1 : 0;
  }

  static clamp(_number, _minimum, _maximum) {
    return Math.max(_minimum, Math.min(_maximum, _number));
  }

  static approach(_number, _target _step) {
    return _number > _target ? Math.max(_number - _step, _target) : Math.min(_number + _step, _target)
  }

  static range(_minimum, _maximum) {
    return _minimum + Math.random() * (_maximum - _minimum)
  }
}
